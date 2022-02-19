import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Value, Slider, Dictionary } from '../types';
import { RootState } from '../app/store';
import { mapToRange, blendBetweenValues } from '../functions/utils';
import { synth, SynthArgs } from '../features/sound';
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
}

interface EnvSlider {
    attack: Slider
    decay: Slider
    sustain: Slider
    release: Slider
}

export interface Buttons extends Dictionary {
    rotate: boolean,
    measure: boolean
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

interface Qubit {
    x: Value
    y: Value
    z: Value
}

export interface DataState extends Dictionary {
    mode: 'interactive' | 'fullscreen' | 'presentation'
    qubit: Qubit
    leftA: SynthSlider
    rightA: SynthSlider
    env: EnvSlider
    modEnv: EnvSlider
    buttons: Buttons
    times: Times
    disabled: boolean
    preset: number
}

const initialState: DataState = {
    mode: 'interactive',
    qubit: {
        x: {value: 0},
        y: {value: 0},
        z: {value: 0},
    },
    leftA: {
        freq: {value: 0, label: 'freq', min: 70, max: 1000, title: '|-i⟩'},
        volume: {value: 1, label: 'amp', min: -50, max: -3},
        reverb: {value: 0.8, label: 'reverb', min: 0, max: 0.8},
        modulationIndex: {value: 0, label: 'mod index', min: 0, max: 20, title: '|-⟩'},
        harmonicity: {value: 0.05, label: 'harmonicity', min: 1, max: 20},
    },
    rightA: {
        freq: {value: 0.2, label: 'freq', min: 70, max: 1000, title: '|i⟩'},
        volume: {value: 0.5, label: 'amp', min: -50, max: -3},
        reverb: {value: 1, label: 'reverb', min: 0, max: 0.8},
        modulationIndex: {value: 1, label: 'mod index', min: 0, max: 20, title: '|+⟩'},
        harmonicity: {value: 1, label: 'harmonicity', min: 1, max: 20},
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
        rotate: false, measure: false, disabled: false
    },
    disabled: false,
    times: {
        one: false, five: true, ten: false
    },
    preset: 0
};

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setMode: (state, action: PayloadAction<'interactive' | 'fullscreen' | 'presentation'>) => {
            state.mode = action.payload
        },
        setControl: (state, action: PayloadAction<{group: string, key: string, value: number}>) => {
            const { group, key, value } = action.payload

            state[group][key].value = value
            
            synth.set(calculateParams(state, [state.leftA, state.rightA], [90, 270]))
        },
        incrementXAxis: (state, action: PayloadAction<number>) => {
            const increment = action.payload
            const x = state.qubit.x.value
            state.qubit.x.value = x + increment

            synth.set(calculateParams(state, [state.leftA, state.rightA], [90, 270]))
        },
        incrementYAxis: (state, action: PayloadAction<number>) => {
            const increment = action.payload
            const y = state.qubit.y.value
            state.qubit.y.value = y + increment

            synth.set(calculateParams(state, [state.leftA, state.rightA], [90, 270]))
        },  
        incrementZAxis: (state, action: PayloadAction<number>) => {
            const increment = action.payload
            const z = state.qubit.z.value
            state.qubit.z.value = z + increment

            synth.set(calculateParams(state, [state.leftA, state.rightA], [90, 270]))
        },        
        setButtonValue: (state, action: PayloadAction<{button: 'rotate' | 'measure' }>) => {
            const { button } = action.payload
            const { measure: isMeasuring, rotate: isRotating } = state.buttons

            state.buttons.rotate = button === 'measure' && !isMeasuring ? false : state.buttons.rotate
            state.buttons.measure = button === 'rotate' && !isRotating ? false : state.buttons.measure
            state.buttons[button] = !state.buttons[button];
        },
        setButtonsDisabled: (state) => {
            state.disabled = true
        },
        setButtonsActive: (state) => {
            state.disabled = false
        },
        setTime: (state, action: PayloadAction<{button: 'one' | 'five' | 'ten' }>) => {
            const { button } = action.payload
            const reset = {one: false, five: false, ten: false}
            state.times = {...reset, [button]: true}
        },
        setPreset: (state, action: PayloadAction<number>) => {
            const presets = [preset0, preset1, preset2, preset3, preset4, preset5, preset6, preset7]
            const preset = presets[action.payload]
            state.leftA = preset.leftA
            state.rightA = preset.rightA
            state.env = preset.env
            state.modEnv = preset.modEnv
            
            synth.set(calculateParams(state, [state.leftA, state.rightA], [90, 270]))
            state.preset = action.payload
        }
    }
});

export const { setMode, setPreset, setControl, setTime, setButtonValue, setButtonsDisabled, setButtonsActive, incrementXAxis, incrementYAxis, incrementZAxis } = dataSlice.actions;

export const getMode = (state: RootState) => state.data.mode;
export const getQubit = (state: RootState) => state.data.qubit;
export const getSlidersValue = (group: string) => (state: RootState) => state.data[group];
export const getSynthParams = (state: RootState) : SynthArgs => calculateParams(state.data, [state.data.leftA, state.data.rightA], [90, 270])
export const getButtonValue = (button: 'rotate' | 'measure') => (state: RootState) => state.data.buttons[button];
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

const calculateParam = (
    position: number, 
    key: string, 
    sliders: SynthSlider[],
    points: number[]
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

const calculateParams = (state: DataState, sliders: SynthSlider[], points: number[]) : SynthArgs => {
    const { env, modEnv } = state
    const xDegrees = state.qubit.x.value * 360
    const yDegrees = state.qubit.y.value * 360
    // const zDegrees = state.qubit.z.value * 360

    return { 
        freq: calculateParam(yDegrees, 'freq', sliders, points), 
        volume: calculateParam(yDegrees, 'volume', sliders, points), 
        reverb: calculateParam(yDegrees, 'reverb', sliders, points), 
        modulationIndex: calculateParam(xDegrees, 'modulationIndex', sliders, points), 
        harmonicity: calculateParam(xDegrees, 'harmonicity', sliders, points), 
        envelope: calculateEnvelope(env),
        modulationEnvelope: calculateEnvelope(modEnv),
        blend: blendBetweenValues(yDegrees, [0, 1], [90, 270])
    }
}

export default dataSlice.reducer;
