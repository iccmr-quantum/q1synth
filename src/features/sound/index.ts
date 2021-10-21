import * as Tone from 'tone'
import { Dictionary } from '../../types'

export interface SynthArgs extends Dictionary {
    freq: number
    volume: number
    reverb: number
    modulationIndex: number
    harmonicity: number
}

async function startAudio() : Promise<void> {
    console.log('starting audio')
    await Tone.start()
    console.log('audio is running')
    Tone.setContext(new Tone.Context({ latencyHint: 'playback' }))
    window.removeEventListener('click', startAudio)
}

window.addEventListener('click', startAudio)

