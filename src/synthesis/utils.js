import { Transport } from "tone"
import { CtFMSynth, CtGranular, CtDuoSynth } from "./ct-synths";

export const formatMutationParams = (params) => {
    return Object.entries(params).reduce((obj, [key, value]) => ({
        ...obj,
        [`_${key}`]: value
    }), {})
}

export const secondsToBeats = seconds => seconds / (60/Transport.bpm.value)
export const beatsToSeconds = beats => beats * (60/Transport.bpm.value)

export const getSynthByType = (type, params, buffer) => {
    switch (type) {
        case 'fm':
            return new CtFMSynth(params)
        case 'granular':
            return new CtGranular(buffer, params)
        case 'subtractive':
            return new CtDuoSynth(params)
        default:
            return new CtFMSynth(params)
    }
}