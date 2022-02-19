interface Map {
    [key: number] : {group: string, key: string}
  }

export const midiMap = (cc: number) : {group: string, key: string} => {
    const map: Map = {
        0: {group: 'qubit', key: 'degrees'},
        1: {group: 'qubit', key: 'x'},
        2: {group: 'qubit', key: 'y'},
        3: {group: 'qubit', key: 'z'},
        4: {group: 'leftA', key: 'freq'},
        5: {group: 'leftA', key: 'volume'},
        6: {group: 'leftA', key: 'reverb'},
        7: {group: 'leftA', key: 'modulationIndex'},
        8: {group: 'leftA', key: 'harmonicity'},
        9: {group: 'rightA', key: 'freq'},
        10: {group: 'rightA', key: 'volume'},
        11: {group: 'rightA', key: 'reverb'},
        12: {group: 'rightA', key: 'modulationIndex'},
        13: {group: 'rightA', key: 'harmonicity'},
        14: {group: 'env', key: 'attack'},
        15: {group: 'env', key: 'decay'},
        16: {group: 'env', key: 'sustain'},
        17: {group: 'env', key: 'release'},
        18: {group: 'modEnv', key: 'attack'},
        19: {group: 'modEnv', key: 'decay'},
        20: {group: 'modEnv', key: 'sustain'},
        21: {group: 'modEnv', key: 'release'}
    }
    return map[cc]
}