import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Value, Slider, Dictionary } from '../types';
import { RootState } from '../app/store';
import { mapToRange, blendBetweenValues } from '../functions/utils';
import { synth, SynthArgs } from '../sound';
import preset0 from './presets/preset0'
import preset1 from './presets/preset1'
import preset2 from './presets/preset2'
import preset3 from './presets/preset3'
import preset4 from './presets/preset4'
import preset5 from './presets/preset5'
import preset6 from './presets/preset6'
import preset7 from './presets/preset7'

interface SynthSlider extends Dictionary{
    freq: Slider
    volume: Slider
    reverb: Slider
    modulationIndex: Slider
    harmonicity: Slider
    lfoFreq: Slider
    lfoDepth: Slider
}

interface EnvSlider {
    attack: Slider
    decay: Slider
    sustain: Slider
    release: Slider
}

export interface Buttons extends Dictionary {
    active: string | null
    labels: string[]
}

export interface Times extends Dictionary {
    one: boolean
    five: boolean
    ten: boolean
}

export interface Preset {
    leftA: SynthSlider
    rightA: SynthSlider
    env: EnvSlider
    modEnv: EnvSlider
}

export interface Qubit {
    x: Value
    y: Value
    z: Value
}

export type Mode = 'simple' | 'advanced' | 'presentation'

export interface DataState extends Dictionary {
    mode: Mode
    isFullScreen: boolean
    qubit: Qubit
    leftA: SynthSlider
    rightA: SynthSlider
    env: EnvSlider
    modEnv: EnvSlider
    buttons: Buttons
    times: Times
    disabled: boolean
    preset: number
    destination: 0 | 1
    shouldRecord: boolean
}

const initialState: DataState = {
    mode: 'advanced',
    isFullScreen: false,
    qubit: {
        x: {value: 0},
        y: {value: 0},
        z: {value: 0},
    },
    leftA: {
        freq: {value: 0, label: 'freq', min: 70, max: 1000, title: '|0⟩'},
        volume: {value: 1, label: 'amp', min: -50, max: -3},
        reverb: {value: 0.8, label: 'reverb', min: 0, max: 0.8},
        modulationIndex: {value: 0, label: 'mod index', min: 0, max: 20, title: '|+⟩'},
        harmonicity: {value: 0.05, label: 'harmonicity', min: 1, max: 20},
        lfoFreq: {value: 0.05, label: 'lfo freq', min: 0, max: 100, title: '-90°'},
        lfoDepth: {value: 0.2, label: 'lfo depth', min: 0, max: 5},
    },
    rightA: {
        freq: {value: 0.2, label: 'freq', min: 70, max: 1000, title: '|1⟩'},
        volume: {value: 0.5, label: 'amp', min: -50, max: -3},
        reverb: {value: 1, label: 'reverb', min: 0, max: 0.8},
        modulationIndex: {value: 1, label: 'mod index', min: 0, max: 20, title: '|-⟩'},
        harmonicity: {value: 1, label: 'harmonicity', min: 1, max: 20},
        lfoFreq: {value: 0.1, label: 'lfo freq', min: 0, max: 100, title: '90°'},
        lfoDepth: {value: 1, label: 'lfo depth', min: 0, max: 5},
    },
    env: {
        attack: {value: 0.25, label: 'attack', min: 0, max: 1},
        decay: {value: 0.1, label: 'decay', min: 0, max: 1},
        sustain: {value: 0.5, label: 'sustain', min: 0, max: 1},
        release: {value: 0.5, label: 'release', min: 0, max: 4}
    },
    modEnv: {
        attack: {value: 0.1, label: 'attack', min: 0, max: 1},
        decay: {value: 1, label: 'decay', min: 0, max: 1},
        sustain: {value: 1, label: 'sustain', min: 0, max: 1},
        release: {value: 0.5, label: 'release', min: 0, max: 4}
    },
    buttons: {
        active: null,
        labels: ['rotate', 'measure']
    },
    disabled: false,
    times: {
        one: false, five: true, ten: false
    },
    preset: 0,
    destination: 0,
    shouldRecord: false
};

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setData: (state, action: PayloadAction<DataState>) => {
            Object.entries(action.payload).map(([key,value]) => state[key] = value)
        },
        setMode: (state, action: PayloadAction<Mode>) => {
            state.mode = action.payload
        },
        toggleIsFullScreen: (state) => {
            state.isFullScreen = !state.isFullScreen
        },
        setControl: (state, action: PayloadAction<{group: string, key: string, value: number}>) => {
            const { group, key, value } = action.payload

            const hasChanged = state[group][key].value !== value

            hasChanged && (state[group][key].value = value);
            hasChanged && synth.set(calculateParams(state))
        },
        incrementXAxis: (state, action: PayloadAction<number>) => {
            const increment = action.payload
            const x = state.qubit.x.value
            state.qubit.x.value = x + increment

            synth.set(calculateParams(state))
        },
        incrementYAxis: (state, action: PayloadAction<number>) => {
            const increment = action.payload
            const y = state.qubit.y.value
            state.qubit.y.value = y + increment

            synth.set(calculateParams(state))
        },  
        incrementZAxis: (state, action: PayloadAction<number>) => {
            const increment = action.payload
            const z = state.qubit.z.value
            state.qubit.z.value = z + increment

            synth.set(calculateParams(state))
        },
        setQubitState: (state, action: PayloadAction<string>) => {
            const position = action.payload
            const xyz = (position === '0' && {x: 0, y: 0, z: 0})
                || (position === 'minus' && {x: 0.5, y: 1, z: 0})
                || (position === 'plus' && {x: 0.5, y: 0, z: 0})
                || (position === 'i' && {x: 0.5, y: 0.5, z: 0})
                || (position === 'minusi' && {x: 0.5, y: -0.5, z: 0})
                || {x: 1, y: 0, z: 0}
            state.qubit = {
                x: {value: xyz.x},
                y: {value: xyz.y},
                z: {value: xyz.z},
            }
            synth.set(calculateParams(state))
        },
        setButtonActive: (state, action: PayloadAction<'rotate' | 'measure' | null>) => {
            action.payload === 'rotate' 
                && (state.qubit = {
                    x: {value: 0},
                    y: {value: 0},
                    z: {value: 0},
                })
                && synth.on(calculateParams(state));
            action.payload === null && synth.off();
            state.buttons.active = action.payload
        },
        setButtonsDisabled: (state) => {
            state.disabled = true
        },
        setButtonsActive: (state) => {
            state.disabled = false
        },
        setTime: (state, action: PayloadAction<{button: string }>) => {
            const { button } = action.payload
            const reset = {one: false, five: false, ten: false}
            state.times = {...reset, [button]: true}
        },
        setPreset: (state, action: PayloadAction<number>) => {
            const stored = localStorage.getItem('q1synth') || "{}"
            
            const presets = {
                0: preset0, 1: preset1, 2: preset2, 3: preset3, 4: preset4, 5: preset5, 6: preset6, 7: preset7,
                ...JSON.parse(stored)
            }
            
            const preset = presets[action.payload]
            state.leftA = preset.leftA
            state.rightA = preset.rightA
            state.env = preset.env
            state.modEnv = preset.modEnv
            
            state.preset = action.payload
            synth.set(calculateParams(state))
        },
        randomise: (state) => {
            state.leftA = randomiseSynthSlider(state.leftA)
            state.rightA = randomiseSynthSlider(state.rightA)
            synth.set(calculateParams(state))
        },
        setShouldRecord: (state, action: PayloadAction<boolean>) => {
            state.shouldRecord = action.payload
        }
    }
});

export const { 
    setData, 
    setMode, 
    toggleIsFullScreen, 
    setPreset, 
    setControl, 
    setTime, 
    setButtonActive, 
    setButtonsDisabled, 
    setButtonsActive, 
    incrementXAxis, 
    incrementYAxis, 
    incrementZAxis, 
    randomise,
    setQubitState,
    setShouldRecord
} = dataSlice.actions;

export const getMode = (state: RootState) => state.data.mode;
export const getDestination = (state: RootState) => state.data.destination;
export const getIsFullScreen = (state: RootState) => state.data.isFullScreen;
export const getQubit = (state: RootState) => state.data.qubit;
export const getSlidersValue = (group: string) => (state: RootState) => state.data[group];
export const getSynthParams = (state: RootState) : SynthArgs => calculateParams(state.data)
export const getButtonActive = (state: RootState) => state.data.buttons.active;
export const getDisabledStatus = (state: RootState) => state.data.disabled
export const getPresetNumber = (state: RootState) => state.data.preset
export const getTimes = (state: RootState) => state.data.times
export const getTime = (state: RootState) => {
    return state.data.times.one 
        ? 1
        : state.data.times.five
            ? 5
            : 10
}
export const getMintData = (state: RootState) : DataState => {
    return {
        ...state.data,
        mode: 'advanced',
        isFullScreen: true,
    }
}

export const getData = (state: RootState) : DataState => {
    return {...state.data}
}

export const getShouldRecord = (state: RootState) => state.data.shouldRecord

const calculateParam = (
    position: number, 
    key: string, 
    sliders: SynthSlider[],
    points: number[] = [0,180]
) => {
    return mapToRange(
        blendBetweenValues(position, sliders.map(slider => slider[key].value), points), 
        0, 1, sliders[0][key].min, sliders[0][key].max
    )
}

const calculateEnvelope = (
    env: EnvSlider
) => ({
    attack: env.attack.value,
    decay: env.decay.value,
    sustain: env.sustain.value,
    release: mapToRange(env.release.value, 0, 1, 0, 4)
})

const calculateParams = (state: DataState) : SynthArgs => {
    const { env, modEnv, leftA, rightA } = state
    const xDegrees = mapToRange(state.qubit.x.value, -1, 1, 0, 360)
    const yDegrees = mapToRange(state.qubit.y.value, -1, 1, 0, 360)
    const zDegrees = mapToRange(state.qubit.z.value, -1, 1, 0, 360)

    return { 
        freq: calculateParam(xDegrees, 'freq', [leftA, rightA]), 
        volume: calculateParam(xDegrees, 'volume', [leftA, rightA]), 
        reverb: calculateParam(xDegrees, 'reverb', [leftA, rightA]), 
        modulationIndex: calculateParam(yDegrees, 'modulationIndex', [leftA, rightA]), 
        harmonicity: calculateParam(yDegrees, 'harmonicity', [leftA, rightA]), 
        envelope: calculateEnvelope(env),
        modulationEnvelope: calculateEnvelope(modEnv),
        blend: blendBetweenValues(xDegrees, [0, 1], [0, 180]),
        lfoFreq: calculateParam(zDegrees, 'lfoFreq', [rightA, leftA]), 
        lfoDepth: calculateParam(zDegrees, 'lfoDepth', [rightA, leftA]), 
    }
}

const randomiseSynthSlider = (slider: SynthSlider) => ({
    freq: {...slider.freq, value: Math.random() * 0.25},
    volume: {...slider.volume, value: Math.random() * 0.5 + 0.5},
    reverb: {...slider.reverb, value: Math.random()},
    modulationIndex: {...slider.modulationIndex, value: Math.random()},
    harmonicity: {...slider.harmonicity, value: Math.random()},
    lfoFreq: {...slider.lfoFreq, value: Math.random()},
    lfoDepth: {...slider.lfoDepth, value: Math.random()}
})

export default dataSlice.reducer;
