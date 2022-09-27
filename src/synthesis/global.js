import { Reverb, FeedbackDelay, Limiter, ToneAudioBuffer} from "tone";

export const limiter = new Limiter(-1).toDestination()
export const reverb = new Reverb(4).connect(limiter)
export const delay = new FeedbackDelay('4n', 0.5).connect(reverb)
const origin = window.location.origin
const urls = [
    'https://tonejs.github.io/audio/berklee/arpeggio3crazy.mp3',
    'https://tonejs.github.io/audio/berklee/taps_1c.mp3',
    'https://tonejs.github.io/audio/berklee/tinkle3.mp3',
    'https://tonejs.github.io/audio/berklee/tapping1.mp3',
    'https://tonejs.github.io/audio/berklee/gong_1.mp3',
    'https://tonejs.github.io/audio/berklee/gurgling_theremin_1.mp3',
    origin + '/samples/IBM_Refrigerators.wav',
]

export const samples = urls.map(url => url.substring(url.lastIndexOf('/') + 1))
export const buffers = urls.map(url => new ToneAudioBuffer(url))