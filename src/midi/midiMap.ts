// TODO: remap params without the key, just by the type...

interface Map {
    [key: number] : {key: string, type: string, valuesI?: number | undefined}
}

export const midiMap = (cc: number) : {key: string, type: string, valuesI?: number} => {
    const map: Map = {
        1: {key: 'qubit', type: 'x'},
        2: {key: 'qubit', type: 'y'},
        3: {key: 'qubit', type: 'z'},
        // left sliders
        4: {key: 'xParams', type: 'note', valuesI: 0},
        5: {key: 'xParams', type: 'gain', valuesI: 0},
        6: {key: 'xParams', type: 'octave', valuesI: 0},
        7: {key: 'yParams', type: '0', valuesI: 0},
        8: {key: 'yParams', type: '1', valuesI: 0},
        9: {key: 'yParams', type: '2', valuesI: 0},
        10: {key: 'zParams', type: 'reverb', valuesI: 0},
        11: {key: 'zParams', type: 'delay', valuesI: 0},
        12: {key: 'zParams', type: 'crush', valuesI: 0},
        13: {key: 'zParams', type: 'pan', valuesI: 0},
        14: {key: 'zParams', type: 'hicut', valuesI: 0},
        15: {key: 'zParams', type: 'locut', valuesI: 0},
        // right sliders
        16: {key: 'xParams', type: 'note', valuesI: 1},
        17: {key: 'xParams', type: 'gain', valuesI: 1},
        18: {key: 'xParams', type: 'octave', valuesI: 1},
        19: {key: 'yParams', type: '0', valuesI: 1},
        20: {key: 'yParams', type: '1', valuesI: 1},
        21: {key: 'yParams', type: '2', valuesI: 1},
        22: {key: 'zParams', type: 'reverb', valuesI: 1},
        23: {key: 'zParams', type: 'delay', valuesI: 1},
        24: {key: 'zParams', type: 'crush', valuesI: 1},
        25: {key: 'zParams', type: 'pan', valuesI: 1},
        26: {key: 'zParams', type: 'hicut', valuesI: 1},
        27: {key: 'zParams', type: 'locut', valuesI: 1},
        // env
        28: {key: 'envParams', type: 'attack'},
        29: {key: 'envParams', type: 'decay'},
        30: {key: 'envParams', type: 'sustain'},
        31: {key: 'envParams', type: 'release'},
        // modEnv
        32: {key: 'modEnvParams', type: 'attack'},
        33: {key: 'modEnvParams', type: 'decay'},
        34: {key: 'modEnvParams', type: 'sustain'},
        35: {key: 'modEnvParams', type: 'release'},
        // TODO: presets
        36: {key: 'preset', type: '0'},
        37: {key: 'preset', type: '1'},
        38: {key: 'preset', type: '2'},
        39: {key: 'preset', type: '3'},
        40: {key: 'preset', type: '4'},
        41: {key: 'preset', type: '5'},
        42: {key: 'preset', type: '6'},
        43: {key: 'preset', type: '7'},
        // Actions
        44: {key: 'action', type: 'play'},
        45: {key: 'action', type: 'measure'},
        46: {key: 'action', type: 'randomise'},
        
    }
    return map[cc] || {key: 'error', type: 'error'}
}