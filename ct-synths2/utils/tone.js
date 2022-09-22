import { immediate, Transport } from "tone"

export function formatCurve(type) {
    const types = {
        exp: 'exponential',
        lin: 'linear'
    }
    return Object.keys(types).includes(type) ? types[type] : 'linear'
}

export const timeToEvent = (time) => time - immediate()
export const doAtTime = (callback, time) => setTimeout(callback, timeToEvent(time) * 1000)

export const secondsToBeats = seconds => seconds / (60/Transport.bpm.value)
export const beatsToSeconds = beats => beats * (60/Transport.bpm.value)