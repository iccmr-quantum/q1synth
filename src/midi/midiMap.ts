interface Map {
    [key: number] : {group: string, key: string}
  }

export const midiMap = (cc: number) : {group: string, key: string} => {
    const map: Map = {
        1: {group: 'qubit', key: 'x'},
        2: {group: 'qubit', key: 'y'},
        3: {group: 'qubit', key: 'z'},
        4: {group: 'leftA', key: 'freq'},
        5: {group: 'leftA', key: 'volume'},
        6: {group: 'leftA', key: 'reverb'},
        7: {group: 'leftA', key: 'modulationIndex'},
        8: {group: 'leftA', key: 'harmonicity'},
        9: {group: 'leftA', key: 'lfoFreq'},
        10: {group: 'leftA', key: 'lfoDepth'},
        11: {group: 'rightA', key: 'freq'},
        12: {group: 'rightA', key: 'volume'},
        13: {group: 'rightA', key: 'reverb'},
        14: {group: 'rightA', key: 'modulationIndex'},
        15: {group: 'rightA', key: 'harmonicity'},
        16: {group: 'rightA', key: 'lfoFreq'},
        17: {group: 'rightA', key: 'lfoDepth'},
        18: {group: 'env', key: 'attack'},
        19: {group: 'env', key: 'decay'},
        20: {group: 'env', key: 'sustain'},
        21: {group: 'env', key: 'release'},
        22: {group: 'modEnv', key: 'attack'},
        23: {group: 'modEnv', key: 'decay'},
        24: {group: 'modEnv', key: 'sustain'},
        25: {group: 'modEnv', key: 'release'},
        26: {group: 'preset', key: '0'},
        27: {group: 'preset', key: '1'},
        28: {group: 'preset', key: '2'},
        29: {group: 'preset', key: '3'},
        30: {group: 'preset', key: '4'},
        31: {group: 'preset', key: '5'},
        32: {group: 'preset', key: '6'},
        33: {group: 'preset', key: '7'},
        34: {group: 'action', key: 'play'},
        35: {group: 'action', key: 'stop'},
        36: {group: 'action', key: 'randomise'},
    }
    return map[cc]
}