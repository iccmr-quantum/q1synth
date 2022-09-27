import { immediate } from "tone"
import { buffers, delay, samples, reverb } from "./global"
import { getSynthByType, formatMutationParams } from "./utils"

const sound = () => {
    let synth = null
    let params = {n: 48, reverb: 0, delay: 0, pan: 0}
    let synthType = 'fm'
    let buffer = 0

    return {
        on: (ps) => {
            params = ps
            synth = getSynthByType(synthType, params, buffers[buffer])
            synth.connect(delay)
            reverb.wet.rampTo(params.reverb, 0.1)
            delay.feedback.rampTo(params.delay, 0.1)
            synth.on(params, '+0')
        },
        off: () => {
            synth.off()
            synth = null
        },
        mutate: (ps) => {
            reverb.wet.rampTo(ps.reverb, 0.1)
            delay.feedback.rampTo(ps.delay, 0.1)
            synth && synth.mutate(formatMutationParams(ps), immediate(), 0.05)
        },
        setType: (type) => synthType = type,
        buffers: samples
    }
}

export default sound()