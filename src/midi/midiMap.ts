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
        4: {key: 'param', type: 'note', valuesI: 0},
        5: {key: 'param', type: 'gain', valuesI: 0},
        6: {key: 'param', type: 'octave', valuesI: 0},
        7: {key: 'param', type: 'rate', valuesI: 0},
        8: {key: 'param', type: 'size', valuesI: 0},
        9: {key: 'param', type: 'overlap', valuesI: 0},
        10: {key: 'param', type: 'begin', valuesI: 0},
        11: {key: 'param', type: 'end', valuesI: 0},
        12: {key: 'param', type: 'modi', valuesI: 0},
        13: {key: 'param', type: 'harm', valuesI: 0},
        14: {key: 'param', type: 'depth', valuesI: 0},
        15: {key: 'param', type: 'reverb', valuesI: 0},
        16: {key: 'param', type: 'delay', valuesI: 0},
        17: {key: 'param', type: 'crush', valuesI: 0},
        18: {key: 'param', type: 'pan', valuesI: 0},
        19: {key: 'param', type: 'hicut', valuesI: 0},
        20: {key: 'param', type: 'locut', valuesI: 0},
        // right sliders
        21: {key: 'param', type: 'note', valuesI: 1},
        22: {key: 'param', type: 'gain', valuesI: 1},
        23: {key: 'param', type: 'octave', valuesI: 1},
        24: {key: 'param', type: 'rate', valuesI: 1},
        25: {key: 'param', type: 'size', valuesI: 1},
        26: {key: 'param', type: 'overlap', valuesI: 1},
        27: {key: 'param', type: 'begin', valuesI: 1},
        28: {key: 'param', type: 'end', valuesI: 1},
        29: {key: 'param', type: 'modi', valuesI: 1},
        30: {key: 'param', type: 'harm', valuesI: 1},
        31: {key: 'param', type: 'depth', valuesI: 1},
        32: {key: 'param', type: 'reverb', valuesI: 1},
        33: {key: 'param', type: 'delay', valuesI: 1},
        34: {key: 'param', type: 'crush', valuesI: 1},
        35: {key: 'param', type: 'pan', valuesI: 1},
        36: {key: 'param', type: 'hicut', valuesI: 1},
        37: {key: 'param', type: 'locut', valuesI: 1},
        // env
        38: {key: 'envParams', type: 'attack'},
        39: {key: 'envParams', type: 'decay'},
        40: {key: 'envParams', type: 'sustain'},
        41: {key: 'envParams', type: 'release'},
        // modEnv
        42: {key: 'modEnvParams', type: 'attack'},
        43: {key: 'modEnvParams', type: 'decay'},
        44: {key: 'modEnvParams', type: 'sustain'},
        45: {key: 'modEnvParams', type: 'release'},
        // TODO: presets
        46: {key: 'preset', type: '0'},
        47: {key: 'preset', type: '1'},
        48: {key: 'preset', type: '2'},
        49: {key: 'preset', type: '4'},
        50: {key: 'preset', type: '4'},
        51: {key: 'preset', type: '5'},
        52: {key: 'preset', type: '6'},
        53: {key: 'preset', type: '7'},
        // Actions
        54: {key: 'action', type: 'play'},
        55: {key: 'action', type: 'measure'},
        56: {key: 'action', type: 'randomise'},
        
    }
    return map[cc] || {key: 'error', type: 'error'}
}