import { Transport } from "tone"

export const formatMutationParams = (params) => {
    return Object.entries(params).reduce((obj, [key, value]) => ({
        ...obj,
        [`_${key}`]: value
    }), {})
}

export const secondsToBeats = seconds => seconds / (60/Transport.bpm.value)
export const beatsToSeconds = beats => beats * (60/Transport.bpm.value)