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
        isPlaying = true
        params = ps
        synth = getSynthByType(synthType, params, buffer)
        synth.connect(delay)
        reverb.wet.rampTo(params.reverb, 0.1)
        delay.feedback.rampTo(params.delay, 0.1)
        synth.on(params, immediate() + 0.05)
    }

    function off() {
        isPlaying = false
        synth && synth.off(immediate())
        synth = null
    }

    return {
        on, 
        off,
        mutate: (ps, lag=0.05) => {
            reverb.wet.rampTo(ps.reverb, lag)
            delay.feedback.rampTo(ps.delay, lag)
            synth && synth.setParams({oct: ps.oct})
            synth && synth.mutate(formatMutationParams(ps), immediate(), lag)
        },
        collapse: (startPs, endPs, lag) => {
            isPlaying = true
            synth = getSynthByType(synthType, startPs, buffer)
            synth.connect(delay)
            reverb.wet.rampTo(endPs.reverb, lag)
            delay.feedback.rampTo(endPs.delay, lag)
            synth.on(startPs, immediate() + 0.05)
            synth.mutate(formatMutationParams(endPs), immediate() + 0.1, lag)
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