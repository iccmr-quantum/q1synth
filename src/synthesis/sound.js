import { immediate, ToneAudioBuffer } from "tone"
import { delay, reverb } from "./global"
import { getSynthByType, formatMutationParams } from "./utils"

const sound = () => {
    let isPlaying = false
    let synth = null
    let params = {n: 48, reverb: 0, delay: 0, pan: 0}
    let synthType = 'fm'
    let buffer = new ToneAudioBuffer('https://tonejs.github.io/audio/berklee/arpeggio3crazy.mp3')

    function on(ps) {
        console.log(ps)
        isPlaying = true
        params = ps
        synth = getSynthByType(synthType, params, buffer)
        synth.connect(delay)
        reverb.wet.rampTo(params.reverb, 0.1)
        delay.feedback.rampTo(params.delay, 0.1)
        synth.on(params, '+0')
    }

    function off() {
        isPlaying = false
        synth && synth.off()
        synth = null
    }

    return {
        on, 
        off,
        mutate: (ps) => {
            reverb.wet.rampTo(ps.reverb, 0.1)
            delay.feedback.rampTo(ps.delay, 0.1)
            synth.setParams({oct: ps.oct})
            synth && synth.mutate(formatMutationParams(ps), immediate(), 0.05)
        },
        setType: (type) => synthType = type,
        setBuffer: (url) => buffer.load(url) 
            .then(() => {
                if (isPlaying) {
                    off()
                    on(params)
                }
            })
    }
}

export default sound()