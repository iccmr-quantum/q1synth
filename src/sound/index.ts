import * as Tone from 'tone'
import { Dictionary } from '../types'
import { makeSynth } from './synths'

export interface SynthArgs extends Dictionary {
    freq: number
    volume: number
    reverb: number
    modulationIndex: number
    harmonicity: number
    envelope: {
        attack: number
        decay: number
        sustain: number
        release: number
    }
    modulationEnvelope: {
        attack: number
        decay: number
        sustain: number
        release: number
    },
    lfoFreq: number
    lfoDepth: number
    blend: number
}

async function startAudio() : Promise<void> {
    console.log('starting audio')
    await Tone.start()
    console.log('audio is running')
    window.removeEventListener('click', startAudio)
}

export const synth = makeSynth()

window.addEventListener('click', startAudio)