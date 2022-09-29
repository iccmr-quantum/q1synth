import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { synthesisParams, genericParams, effectParams } from './params';
import { blendBetweenValues, mapToRange, roundToNearestX } from '../functions/utils';
import sound from './sound';
const origin = window.location.origin

// These should remain in sync
export type SynthType = 'fm' | 'granular' | 'subtractive'
export const synthTypes = ['fm', 'granular', 'subtractive']

export interface Param {
    type: string
    id: string
    min: number
    max: number
    step: number
    values: number[]
    selected: boolean
}

export interface Coordinates {
    x: number
    y: number
    z: number
}

export interface SynthesisState {
    synth: SynthType
    disabled: boolean
    qubit: Coordinates
    params: {
        [key: string]: Param[]
    }
    sample: number
    samples: string[]
}

const initialSynth = 'fm'

const initialState: SynthesisState = {
    synth: initialSynth,
    disabled: false,
    qubit: {
        x: 0,
        y: 0,
        z: 0
    },
    params: {
        xParams: genericParams,
        yParams: synthesisParams[initialSynth],
        zParams: effectParams,
        envParams: [
            { type: 'attack', id: 'a', min: 0, max: 2, step: 0, values: [0.1], selected: false},
            { type: 'decay', id: 'd', min: 0, max: 1, step: 0, values: [0.2], selected: false},
            { type: 'sustain', id: 's', min: 0, max: 1, step: 0, values: [0.5], selected: false},
            { type: 'release', id: 'r', min: 0, max: 4, step: 0, values: [1], selected: false }
        ],
        modEnvParams: [
            { type: 'attack', id: 'moda', min: 0, max: 2, step: 0, values: [0], selected: false},
            { type: 'decay', id: 'modd', min: 0, max: 1, step: 0, values: [0.2], selected: false},
            { type: 'sustain', id: 'mods', min: 0, max: 1, step: 0, values: [0.5], selected: false},
            { type: 'release', id: 'modr', min: 0, max: 4, step: 0, values: [1], selected: false }
        ]
    },
    sample: 0,
    samples: [
        'https://tonejs.github.io/audio/berklee/arpeggio3crazy.mp3',
        'https://tonejs.github.io/audio/berklee/taps_1c.mp3',
        'https://tonejs.github.io/audio/berklee/tinkle3.mp3',
        'https://tonejs.github.io/audio/berklee/tapping1.mp3',
        'https://tonejs.github.io/audio/berklee/gong_1.mp3',
        'https://tonejs.github.io/audio/berklee/gurgling_theremin_1.mp3'
    ]
};

export const synthesisSlice = createSlice({
    name: 'synthesis',
    initialState,
    reducers: {
        setSynth: (state, action: PayloadAction<SynthType>) => {
            state.synth = action.payload;
            state.params.xParams = genericParams;
            state.params.yParams = synthesisParams[action.payload];
            state.params.zParams = effectParams;
            sound.setType(action.payload);
        },
        setParam: (state, action: PayloadAction<{id: string, valuesI: number, value: number}>) => {
            const { id, valuesI, value } = action.payload;
            const params = [...Object.values(state.params).flat()];
            
            const param = params.find(p => p.id === id)
            param && (param.values[valuesI] = value);

            sound.mutate(formatSynthParams(state));
        },
        toggleSelectedParam: (state, action: PayloadAction<string>) => {
            const id = action.payload
            const params = [...Object.values(state.params).flat()];
            const param = params.find(p => p.id === id)
            
            param && (param.selected = true);
        },
        moveSelectedParams: (state, action: PayloadAction<string>) => {
            const { xParams, yParams, zParams } = state.params;
            const selectedParams = [...xParams, ...yParams, ...zParams].filter(p => p.selected);
            state.params = {
                ...state.params,
                xParams: xParams.filter(p => !p.selected),
                yParams: yParams.filter(p => !p.selected),
                zParams: zParams.filter(p => !p.selected)
            }
            state.params[action.payload] = [
                ...state.params[action.payload], 
                ...selectedParams.map(p => ({...p, selected: false}))
            ];
        },
        setQubit: (state, action: PayloadAction<Coordinates>) => {
            state.qubit = action.payload;
            sound.mutate(formatSynthParams(state));
        },
        setQubitAxis: (state, action: PayloadAction<{axis: any, value: number}>) => {
            if(state.disabled) return;
            const { axis, value } = action.payload;
            axis === 'x' && (state.qubit.x = value);
            axis === 'y' && (state.qubit.y = value);
            axis === 'z' && (state.qubit.z = value);
            sound.mutate(formatSynthParams(state));
        },
        incrementQubitBy: (state, action: PayloadAction<Coordinates>) => {
            const { x, y, z } = action.payload;
            state.qubit.x += x
            state.qubit.y += y
            state.qubit.z += z
            sound.mutate(formatSynthParams(state));
        },
        play: (state) => sound.on(formatSynthParams(state)),
        stop: () => sound.off(),
        randomise: (state) => {
            const { xParams, yParams, zParams, envParams, modEnvParams } = state.params;
            [...xParams, ...yParams, ...zParams, ...envParams, ...modEnvParams].forEach((param: Param) => {
                if(['hicut', 'locut', 'gain'].includes(param.type)) return;

                param.values = param.values.map(() => Math.random())
            })

            sound.mutate(formatSynthParams(state));
        },
        loadState: (state, action: PayloadAction<SynthesisState>) => {
            const { synth, params, sample, samples } = action.payload;
            
            state.synth = synth;
            sound.setType(synth);
            
            state.params = params;
            
            sound.setBuffer(samples[sample])
            
            sound.mutate(formatSynthParams(state));
        },
        setDisabled: (state, action: PayloadAction<boolean>) => {
            state.disabled = action.payload;
        },
        setSample: (state, action: PayloadAction<number>) => {
            state.sample = action.payload;
        },
        updateSamples: (state, action: PayloadAction<string[]>) => {
            state.samples = [...state.samples, ...action.payload];
        }
    }
});

export const getSynth = (state: RootState) => state.synthesis.synth;
export const getSample = (state: RootState) => state.synthesis.sample;
export const getSamples = (state: RootState) => state.synthesis.samples;
export const getXParams = (state: RootState) => state.synthesis.params.xParams;
export const getYParams = (state: RootState) => state.synthesis.params.yParams;
export const getZParams = (state: RootState) => state.synthesis.params.zParams;
export const getEnvParams = (state: RootState) => state.synthesis.params.envParams;
export const getModEnvParams = (state: RootState) => state.synthesis.params.modEnvParams;
export const getQubit = (state: RootState) => state.synthesis.qubit;
export const getDisabled = (state: RootState) => state.synthesis.disabled;
export const getState = (state: RootState) : SynthesisState => {
    return {...state.synthesis}
}

export const { 
    setSynth,
    setParam,
    setQubit,
    setQubitAxis,
    incrementQubitBy,
    play,
    stop,
    randomise,
    loadState,
    setDisabled,
    toggleSelectedParam,
    moveSelectedParams,
    setSample,
    updateSamples
} = synthesisSlice.actions;

/**
 * Any final scaling of the param value should be done here
**/
function sanitiseParam(key: string, value: number) {
    switch(key) {
        case 'note':
            // TODO: add in more scales?
            return [0,2,3,5,7,9,10,12][Math.floor(value)] + 36
        default:
            return value;
    }
}

/**
 * Calculate a synth param based on the qubit position
**/
function calculateParamValue(param: Param, angle: number) {
    const { values } = param;
    const interpolated = blendBetweenValues(angle, values, [0, 180])
    const scaled = mapToRange(interpolated, 0, 1, param.min, param.max);
    const rounded = param.step ? roundToNearestX(scaled, param.step) : Math.round(scaled * 100) / 100;
    const sanitised = sanitiseParam(param.type, rounded);
    return {id: param.id, value: sanitised}
}

/**
 * Format synth params into the shape required by CtSynths package
**/
function formatSynthParams(state: SynthesisState) {
    const { params, qubit } = state;
    const x = mapToRange(qubit.x, -1, 1, 0, 360);
    const y = mapToRange(qubit.y, -1, 1, 0, 360);
    const z = mapToRange(qubit.z, -1, 1, 0, 360);
    const flattened = [
        ...params.xParams.map(p => calculateParamValue(p, x)),
        ...params.yParams.map(p => calculateParamValue(p, y)),
        ...params.zParams.map(p => calculateParamValue(p, z)),
        ...params.envParams.map(p => ({id: p.id, value: p.values[0]})),
        ...params.modEnvParams.map(p => ({id: p.id, value: p.values[0]})),
    ];

    console.log(flattened)
    
    return Object.values(flattened).reduce((obj, {id, value}) => {
        return { 
            ...obj, 
            [id]: value
        }; 
    }, {})
}

export default synthesisSlice.reducer;