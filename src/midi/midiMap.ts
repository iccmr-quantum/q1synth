// TODO: remap params without the key, just by the type...

interface Map {
    [key: number] : {id: string, valuesI?: number | undefined}
}

export const midiMap = (cc: number) : {id: string, valuesI?: number | undefined} => {
    const map: Map = {
        1: {id: 'x'},
        2: {id: 'y'},
        3: {id: 'z'},
        // left sliders
        4: {id: 'n', valuesI: 0}, // note
        5: {id: 'amp', valuesI: 0}, 
        6: {id: 'oct', valuesI: 0}, // octave
        7: {id: 'rate', valuesI: 0},
        8: {id: 'size', valuesI: 0},
        9: {id: 'overlap', valuesI: 0},
        10: {id: 'begin', valuesI: 0},
        11: {id: 'end', valuesI: 0},
        12: {id: 'modi', valuesI: 0},
        13: {id: 'harm', valuesI: 0},
        14: {id: 'depth', valuesI: 0},
        15: {id: 'reverb', valuesI: 0},
        16: {id: 'delay', valuesI: 0},
        17: {id: 'crush', valuesI: 0},
        18: {id: 'pan', valuesI: 0},
        19: {id: 'hicut', valuesI: 0},
        20: {id: 'locut', valuesI: 0},
        // right sliders
        21: {id: 'n', valuesI: 1}, // note
        22: {id: 'amp', valuesI: 1}, 
        23: {id: 'oct', valuesI: 1}, // octave
        24: {id: 'rate', valuesI: 1},
        25: {id: 'size', valuesI: 1},
        26: {id: 'overlap', valuesI: 1},
        27: {id: 'begin', valuesI: 1},
        28: {id: 'end', valuesI: 1},
        29: {id: 'modi', valuesI: 1},
        30: {id: 'harm', valuesI: 1},
        31: {id: 'depth', valuesI: 1},
        32: {id: 'reverb', valuesI: 1},
        33: {id: 'delay', valuesI: 1},
        34: {id: 'crush', valuesI: 1},
        35: {id: 'pan', valuesI: 1},
        36: {id: 'hicut', valuesI: 1},
        37: {id: 'locut', valuesI: 1},
        // env
        38: {id: 'a'},
        39: {id: 'd'},
        40: {id: 's'},
        41: {id: 'r'},
        // modEnv
        42: {id: 'moda'},
        43: {id: 'modd'},
        44: {id: 'mods'},
        45: {id: 'modr'},
        // TODO: presets
        46: {id: '0'},
        47: {id: '1'},
        48: {id: '2'},
        49: {id: '3'},
        50: {id: '4'},
        51: {id: '5'},
        52: {id: '6'},
        53: {id: '7'},
        // Actions
        54: {id: 'play'},
        55: {id: 'measure'},
        56: {id: 'randomise'},
        57: {id: 'config'},
        58: {id: 'volume'},
        
    }
    return map[cc] || {id: 'error'}
}