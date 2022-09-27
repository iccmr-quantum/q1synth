// Deprecated

import { Transport, immediate} from "tone";
import { buffers, delay, reverb, samples } from "./global"
import { beatsToSeconds, formatMutationParams, getSynthByType } from "./utils";

const synthesis = () => {
    let synths = []
    let params = {n: 48, reverb: 0, delay: 0, pan: 0}
    let synthType = 'fm'
    let q = 128;
    let count = -1
    let buffer = 0
    let isCollapsing = false
    
    Transport.scheduleRepeat((time) => {
        count++;
        synths && synths.map(s => s.mutate(formatMutationParams(params), immediate(), 0.05));
        reverb.wet.rampTo(params.reverb, 0.1)
        delay.feedback.rampTo(params.delay, 0.1)
        synths = synths.slice(-4);
        
        if(count%Math.floor(q) || isCollapsing) return

        const synth = getSynthByType(synthType, params, buffers[buffer])
        synth.connect(delay)
        synth.play({...params, dur: beatsToSeconds(4)}, time)
        synths.push(synth)
    }, `${q}n`);

    return {
        play: (ps) => {
            params = ps
            reverb.wet.rampTo(ps.reverb, 0.1)
            delay.feedback.rampTo(ps.delay, 0.1)
            Transport.start()
        },
        stop: () => {
            Transport.stop(immediate())
            synths = []
            count = -1
            isCollapsing = false
        },
        trigger: (ps, dur, time) => {
            isCollapsing = true
            params = ps
            const synth = getSynthByType(synthType, params, buffers[buffer])
            synth.connect(delay)
            synth.play({...params, dur}, time)
            synths.push(synth)
        },
        setParams: ps => {
            params = ps
        },
        mutateParams: ps => {
            synths && synths.map(s => s.mutate(formatMutationParams(params), immediate(), 0));
            reverb.wet.rampTo(ps.reverb, 0.1)
            delay.feedback.rampTo(ps.delay, 0.1)
        },
        setType: (type) => synthType = type,
        setBuffer: (i) => buffer = i,
        setBpm: bpm => Transport.bpm.rampTo(bpm, 0.1),
        buffers: samples
    }
}

export default synthesis()