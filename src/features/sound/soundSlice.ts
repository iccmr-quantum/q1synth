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
    left: SynthSlider
    right: SynthSlider
    env: EnvSlider
    modEnv: EnvSlider
}

const initialState: SoundState = {
    dial: 0,
    left: {
        freq: {value: 0, label: 'freq'},
        amp: {value: 1, label: 'amp'},
        reverb: {value: 0, label: 'reverb'},
        modIndex: {value: 0, label: 'mod index'},
        harmonicity: {value: 0, label: 'harmonicity'},
    },
    right: {
        freq: {value: 0.5, label: 'freq'},
        amp: {value: 0.5, label: 'amp'},
        reverb: {value: 1, label: 'reverb'},
        modIndex: {value: 1, label: 'mod index'},
        harmonicity: {value: 1, label: 'harmonicity'},
    },
    env: {
        attack: {value: 0.01, label: 'attack'},
        decay: {value: 0.1, label: 'decay'},
        sustain: {value: 0.5, label: 'sustain'},
        release: {value: 0.5, label: 'release'}
    },
    modEnv: {
        attack: {value: 0.01, label: 'attack'},
        decay: {value: 1, label: 'decay'},
        sustain: {value: 1, label: 'sustain'},
        release: {value: 0.5, label: 'release'}
    }
};

export const soundSlice = createSlice({
    name: 'sound',
    initialState,
    reducers: {
        setDialValue: (state, action: PayloadAction<number>) => {
            state.dial = action.payload;
            synth.set(calculateParams(state))
        },
        setSliderAndSynthValues: (state, action: PayloadAction<{group: string, key: string, value: number, dial: number}>) => {
            const { group, key, value } = action.payload
            state[group][key].value = value;
            synth.set(calculateParams(state))
        }
    }
});

export const { setDialValue, setSliderAndSynthValues } = soundSlice.actions;

export const getDialValue = (state: RootState) => state.sound.dial;
export const getSlidersValue = (group: string) => (state: RootState) => state.sound[group];
export const getSynthParams = (state: RootState) : SynthArgs => calculateParams(state.sound)

const calculateParams = (state: SoundState) => {
    const { dial, left, right, env, modEnv } = state
    const freq = mapToRange(
        blendBetweenValues(dial, [left.freq.value, right.freq.value], [90, 270]), 
        0, 1, 70, 1000
    )
    const volume = mapToRange(
        blendBetweenValues(dial, [left.amp.value, right.amp.value], [90, 270]), 
        0, 1, -50, -3
    )
    const reverb = mapToRange(
        blendBetweenValues(dial, [left.reverb.value, right.reverb.value], [90, 270]), 
        0, 1, 0, 0.8
    )
    const modulationIndex = mapToRange(
        blendBetweenValues(dial, [left.modIndex.value, right.modIndex.value], [90, 270]), 
        0, 1, 0, 20
    )
    const harmonicity = mapToRange(
        blendBetweenValues(dial, [left.harmonicity.value, right.harmonicity.value], [90, 270]), 
        0, 1, 1, 20
    )
    
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
        }
    }
}


export default soundSlice.reducer;
