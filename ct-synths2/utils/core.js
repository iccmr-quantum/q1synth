import { Midi, Time } from "tone";

export const formatTime = time => Time(time).toSeconds()

export const mtf = n => Midi(n).toFrequency()

export const getClassSetters = ({prototype}) => Object.getOwnPropertyNames(prototype)
    .filter(prop => Object.getOwnPropertyDescriptor(prototype, prop).set)

export const getClassMethods = ({prototype}) => Object.getOwnPropertyNames(prototype)
    .filter(prop => Object.getOwnPropertyDescriptor(prototype, prop))

export const getDisposable = c => Object.values(c).filter(prop => prop && prop.dispose)

export const getSchedulable = c => Object.values(c).filter(prop => prop && prop.cancelScheduledValues)

export function formatOscType(type) {
    const types = {
        sine: 'sine', 
        square: 'square', 
        saw: 'sawtooth', 
        tri: 'triangle'
    }
    return Object.keys(types).includes(type) ? types[type] : 'sine'
}

export const isSettableKey = string => string.charAt(0) !== '_'
export const isMutableKey = string => string.charAt(0) === '_'

export const max = (a, b) => a > b ? a : b

export const mapToRange = (x, inMin, inMax, outMin, outMax) => {
    return ((x - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

export const mapToLogRange = (x, inMin, inMax, outMin, outMax) => {
    const logOutMin = Math.log(outMin ? outMin : 0.001)
    const logOutMax = Math.log(outMax ? outMax : 0.001)
    const scale = (logOutMax - logOutMin) / (inMax - inMin);
    return Math.exp(logOutMin + scale * (x - inMin));
}

export const wrap = (x, min, max) => {
    return x >= min && x <= max ? x : x < min ? max : min
}