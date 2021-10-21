import * as Tone from 'tone'

export interface SynthArgs {
    freq: number
    amp: number
    reverb: number
    modIndex: number
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

