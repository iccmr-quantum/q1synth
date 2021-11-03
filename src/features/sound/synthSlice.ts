import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Slider, Dictionary } from '../../types';
import { RootState } from '../../app/store';
import { mapToRange, blendBetweenValues } from '../../functions/utils';
import { synth, SynthArgs } from '.';

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

export interface SoundState extends Dictionary {
    dial: number
    time: string
    leftA: SynthSlider
    rightA: SynthSlider
    env: EnvSlider
    modEnv: EnvSlider
}

const initialState: SoundState = {
    dial: 0,
    time: '4m',
    leftA: {
        freq: {value: 0, label: 'freq', min: 70, max: 1000},
        volume: {value: 1, label: 'amp', min: -50, max: -3},
        reverb: {value: 0, label: 'reverb', min: 0, max: 0.8},
        modulationIndex: {value: 0, label: 'mod index', min: 0, max: 20},
        harmonicity: {value: 0.05, label: 'harmonicity', min: 1, max: 20},
    },
    rightA: {
        freq: {value: 0.5, label: 'freq', min: 70, max: 1000},
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
    }
};

export const synthSlice = createSlice({
    name: 'synth',
    initialState,
    reducers: {
        setDialValue: (state, action: PayloadAction<number>) => {
            state.dial = action.payload;
            synth.set(calculateParams(state, [state.leftA, state.rightA], [90, 270]))
        },
        setTime: (state, action: PayloadAction<string>) => {
            state.time = action.payload;
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
        }
    }
});

export const { setDialValue, incrementDialValue, setSlider, randomiseSliderGroup, setTime } = synthSlice.actions;

export const getDialValue = (state: RootState) => state.synth.dial;
export const getSlidersValue = (group: string) => (state: RootState) => state.synth[group];
export const getTime = (state: RootState) => state.synth.time;
export const getSynthParams = (state: RootState) : SynthArgs => calculateParams(state.synth, [state.synth.leftA, state.synth.rightA], [90, 270])

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

const calculateParams = (state: SoundState, sliders: SynthSlider[], points: number[]) : SynthArgs => {
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

export default synthSlice.reducer;
