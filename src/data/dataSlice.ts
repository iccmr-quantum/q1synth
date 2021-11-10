import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Slider, Dictionary } from '../types';
import { RootState } from '../app/store';
import { mapToRange, blendBetweenValues } from '../functions/utils';
import { synth, SynthArgs } from '../features/sound';

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
    measure: boolean,
    disabled: boolean
}

export interface Times extends Dictionary {
    one: boolean
    five: boolean
    ten: boolean
}

export interface DataState extends Dictionary {
    dial: number
    leftA: SynthSlider
    rightA: SynthSlider
    env: EnvSlider
    modEnv: EnvSlider
    buttons: Buttons
    times: Times
    preset: number
}

const initialState: DataState = {
    dial: 0,
    leftA: {
        freq: {value: 0, label: 'freq', min: 70, max: 1000},
        volume: {value: 1, label: 'amp', min: -50, max: -3},
        reverb: {value: 0.8, label: 'reverb', min: 0, max: 0.8},
        modulationIndex: {value: 0, label: 'mod index', min: 0, max: 20},
        harmonicity: {value: 0.05, label: 'harmonicity', min: 1, max: 20},
    },
    rightA: {
        freq: {value: 0.2, label: 'freq', min: 70, max: 1000},
        volume: {value: 0.5, label: 'amp', min: -50, max: -3},
        reverb: {value: 1, label: 'reverb', min: 0, max: 0.8},
        modulationIndex: {value: 1, label: 'mod index', min: 0, max: 20},
        harmonicity: {value: 1, label: 'harmonicity', min: 1, max: 20},
    },
    leftB: {
        freq: {value: 0, label: 'freq', min: 70, max: 1000},
        volume: {value: 1, label: 'amp', min: -50, max: -3},
        reverb: {value: 0, label: 'reverb', min: 0, max: 0.8},
        modulationIndex: {value: 0, label: 'mod index', min: 0, max: 20},
        harmonicity: {value: 0.05, label: 'harmonicity', min: 1, max: 20},
    },
    rightB: {
        freq: {value: 0, label: 'freq', min: 70, max: 1000},
        volume: {value: 1, label: 'amp', min: -50, max: -3},
        reverb: {value: 0, label: 'reverb', min: 0, max: 0.8},
        modulationIndex: {value: 0, label: 'mod index', min: 0, max: 20},
        harmonicity: {value: 0.05, label: 'harmonicity', min: 1, max: 20},
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
    times: {
        one: true, five: false, ten: false
    },
    preset: 0
};

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setDialValue: (state, action: PayloadAction<number>) => {
            state.dial = action.payload;
            synth.set(calculateParams(state, [state.leftA, state.rightA], [90, 270]))
        },
        incrementDialValue: (state, action: PayloadAction<number>) => {
            state.dial = (state.dial + action.payload) % 360;
            synth.set(calculateParams(state, [state.leftA, state.rightA, state.leftB, state.rightB], [45, 135, 225, 315]))
        },
        setSlider: (state, action: PayloadAction<{group: string, key: string, value: number, dial: number}>) => {
            const { group, key, value } = action.payload
            state[group][key].value = value;
            synth.set(calculateParams(state, [state.leftA, state.rightA], [90, 270]))
        },
        randomiseSliderGroup: (state, action: PayloadAction<string>) => {
            state[action.payload].freq.value = Math.random()
            state[action.payload].volume.value = Math.random()
            state[action.payload].reverb.value = Math.random()
            state[action.payload].modulationIndex.value = Math.random()
            state[action.payload].harmonicity.value = Math.random()
        },
        setButtonValue: (state, action: PayloadAction<{button: 'rotate' | 'measure' }>) => {
            const { button } = action.payload
            const { measure: isMeasuring, rotate: isRotating } = state.buttons

            state.buttons.rotate = button === 'measure' && !isMeasuring ? false : state.buttons.rotate
            state.buttons.measure = button === 'rotate' && !isRotating ? false : state.buttons.measure
            state.buttons[button] = !state.buttons[button];
        },
        setButtonsDisabled: (state) => {
            state.buttons.disabled = true
        },
        setButtonsActive: (state) => {
            state.buttons.disabled = false
        },
        setTime: (state, action: PayloadAction<{button: 'one' | 'five' | 'ten' }>) => {
            const { button } = action.payload
            const reset = {one: false, five: false, ten: false}
            state.times = {...reset, [button]: true}
        },
        setPreset: (state, action: PayloadAction<number>) => {
            state.preset = action.payload
        }
    }
});

export const { setPreset, setDialValue, incrementDialValue, setSlider, randomiseSliderGroup, setTime, setButtonValue, setButtonsDisabled, setButtonsActive } = dataSlice.actions;

export const getDialValue = (state: RootState) => state.data.dial;
export const getSlidersValue = (group: string) => (state: RootState) => state.data[group];
export const getSynthParams = (state: RootState) : SynthArgs => calculateParams(state.data, [state.data.leftA, state.data.rightA], [90, 270])
export const getButtonValue = (button: 'rotate' | 'measure') => (state: RootState) => state.data.buttons[button];
export const getDisabledStatus = (state: RootState) => state.data.buttons.disabled
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
    dial: number, 
    key: string, 
    sliders: SynthSlider[],
    points: number[]
) => {
    return mapToRange(
        blendBetweenValues(dial, sliders.map(slider => slider[key].value), points), 
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
    const { dial, env, modEnv } = state

    return { 
        freq: calculateParam(dial, 'freq', sliders, points), 
        volume: calculateParam(dial, 'volume', sliders, points), 
        reverb: calculateParam(dial, 'reverb', sliders, points), 
        modulationIndex: calculateParam(dial, 'modulationIndex', sliders, points), 
        harmonicity: calculateParam(dial, 'harmonicity', sliders, points), 
        envelope: calculateEnvelope(env),
        modulationEnvelope: calculateEnvelope(modEnv),
        blend: blendBetweenValues(dial, [0, 1], [90, 270])
    }
}

export default dataSlice.reducer;