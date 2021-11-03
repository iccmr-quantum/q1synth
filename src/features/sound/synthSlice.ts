import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Slider, Dictionary } from '../../types';
import { RootState } from '../../app/store';
import { mapToRange, blendBetweenValues } from '../../functions/utils';
import { synth, SynthArgs } from '.';

interface SynthSlider {
    freq: Slider
    amp: Slider
    reverb: Slider
    modIndex: Slider
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
        freq: {value: 0, label: 'freq'},
        amp: {value: 1, label: 'amp'},
        reverb: {value: 0, label: 'reverb'},
        modIndex: {value: 0, label: 'mod index'},
        harmonicity: {value: 0.05, label: 'harmonicity'},
    },
    rightA: {
        freq: {value: 0.5, label: 'freq'},
        amp: {value: 0.5, label: 'amp'},
        reverb: {value: 1, label: 'reverb'},
        modIndex: {value: 1, label: 'mod index'},
        harmonicity: {value: 1, label: 'harmonicity'},
    },
    leftB: {
        freq: {value: 0, label: 'freq'},
        amp: {value: 1, label: 'amp'},
        reverb: {value: 0, label: 'reverb'},
        modIndex: {value: 0, label: 'mod index'},
        harmonicity: {value: 0, label: 'harmonicity'},
    },
    rightB: {
        freq: {value: 0.5, label: 'freq'},
        amp: {value: 0.5, label: 'amp'},
        reverb: {value: 1, label: 'reverb'},
        modIndex: {value: 1, label: 'mod index'},
        harmonicity: {value: 1, label: 'harmonicity'},
    },    
    env: {
        attack: {value: 0.25, label: 'attack'},
        decay: {value: 0.1, label: 'decay'},
        sustain: {value: 0.5, label: 'sustain'},
        release: {value: 0.5, label: 'release'}
    },
    modEnv: {
        attack: {value: 0.1, label: 'attack'},
        decay: {value: 1, label: 'decay'},
        sustain: {value: 1, label: 'sustain'},
        release: {value: 0.5, label: 'release'}
    }
};

export const synthSlice = createSlice({
    name: 'synth',
    initialState,
    reducers: {
        setDialValue: (state, action: PayloadAction<number>) => {
            state.dial = action.payload;
            synth.set(calculateParams(state))
        },
        setTime: (state, action: PayloadAction<string>) => {
            state.time = action.payload;
        },
        incrementDialValue: (state, action: PayloadAction<number>) => {
            state.dial = (state.dial + action.payload) % 360;
            synth.set(calculatePartRandomParams(state))
        },
        setSlider: (state, action: PayloadAction<{group: string, key: string, value: number, dial: number}>) => {
            const { group, key, value } = action.payload
            state[group][key].value = value;
            synth.set(calculateParams(state))
        },
        randomiseSliderGroup: (state, action: PayloadAction<string>) => {
            state[action.payload].freq.value = Math.random()
            state[action.payload].amp.value = Math.random()
            state[action.payload].reverb.value = Math.random()
            state[action.payload].modIndex.value = Math.random()
            state[action.payload].harmonicity.value = Math.random()
        }
    }
});

export const { setDialValue, incrementDialValue, setSlider, randomiseSliderGroup, setTime } = synthSlice.actions;

export const getDialValue = (state: RootState) => state.synth.dial;
export const getSlidersValue = (group: string) => (state: RootState) => state.synth[group];
export const getTime = (state: RootState) => state.synth.time;
export const getSynthParams = (state: RootState) : SynthArgs => calculateParams(state.synth)

// REFACTOR
const calculateParams = (state: SoundState) => {
    const { dial, leftA, rightA, env, modEnv } = state
    const freq = mapToRange(
        blendBetweenValues(dial, [leftA.freq.value, rightA.freq.value], [90, 270]), 
        0, 1, 70, 1000
    )
    const volume = mapToRange(
        blendBetweenValues(dial, [leftA.amp.value, rightA.amp.value], [90, 270]), 
        0, 1, -50, -3
    )
    const reverb = mapToRange(
        blendBetweenValues(dial, [leftA.reverb.value, rightA.reverb.value], [90, 270]), 
        0, 1, 0, 0.8
    )
    const modulationIndex = mapToRange(
        blendBetweenValues(dial, [leftA.modIndex.value, rightA.modIndex.value], [90, 270]), 
        0, 1, 0, 20
    )
    const harmonicity = mapToRange(
        blendBetweenValues(dial, [leftA.harmonicity.value, rightA.harmonicity.value], [90, 270]), 
        0, 1, 1, 20
    )

    const blend = blendBetweenValues(dial, [0, 1], [90, 270])
    
    return { 
        freq, 
        volume, 
        reverb, 
        modulationIndex, 
        harmonicity, 
        envelope: {
            attack: env.attack.value,
            decay: env.decay.value,
            sustain: env.sustain.value,
            release: mapToRange(env.release.value, 0, 1, 0, 4)
        },
        modulationEnvelope: {
            attack: modEnv.attack.value,
            decay: modEnv.decay.value,
            sustain: modEnv.sustain.value,
            release: mapToRange(modEnv.release.value, 0, 1, 0, 4)
        },
        blend
    }
}

const calculatePartRandomParams = (state: SoundState) => {
    const { dial, leftA, rightA, leftB, rightB, env, modEnv } = state
    const points = [45, 135, 225, 315]
    const freq = mapToRange(
        blendBetweenValues(dial, [leftA.freq.value, rightA.freq.value, leftB.freq.value, rightB.freq.value], points), 
        0, 1, 70, 1000
    )
    const volume = mapToRange(
        blendBetweenValues(dial, [leftA.amp.value, rightA.amp.value, leftB.freq.value, rightB.freq.value], points), 
        0, 1, -50, -3
    )
    const reverb = mapToRange(
        blendBetweenValues(dial, [leftA.reverb.value, rightA.reverb.value, leftB.freq.value, rightB.freq.value], points), 
        0, 1, 0, 0.8
    )
    const modulationIndex = mapToRange(
        blendBetweenValues(dial, [leftA.modIndex.value, rightA.modIndex.value, leftB.freq.value, rightB.freq.value], points), 
        0, 1, 0, 20
    )
    const harmonicity = mapToRange(
        blendBetweenValues(dial, [leftA.harmonicity.value, rightA.harmonicity.value, leftB.freq.value, rightB.freq.value], points), 
        0, 1, 1, 20
    )

    const blend = blendBetweenValues(dial, [0, 1], [90, 270])
    
    return { 
        freq, 
        volume, 
        reverb, 
        modulationIndex, 
        harmonicity, 
        envelope: {
            attack: env.attack.value,
            decay: env.decay.value,
            sustain: env.sustain.value,
            release: mapToRange(env.release.value, 0, 1, 0, 4)
        },
        modulationEnvelope: {
            attack: modEnv.attack.value,
            decay: modEnv.decay.value,
            sustain: modEnv.sustain.value,
            release: mapToRange(modEnv.release.value, 0, 1, 0, 4)
        },
        blend
    }
}

export default synthSlice.reducer;
