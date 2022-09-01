import { Loop, Transport, getDestination, now, immediate } from "tone";
import { CtFMSynth, CtGranular, CtDualSynth } from "./ct-synths"; // TODO: replace this with node_module

const synthesis = () => {
    let synth
    let params = {n: 48, dur: 1, amp: 0.5}
    let synthType = 'fm'
    let duration = 1;
    let count = -1
    
    Transport.scheduleRepeat((time) => {
        count++;
        if(count%Math.floor(48/duration)) return
        switch(synthType) {
            case 'fm':
                synth = new CtFMSynth()
                break
            case 'granular':
                synth = new CtGranular()
                break
            case 'subtractive':
                synth = new CtDualSynth()
                break
            default:
                synth = new CtFMSynth()
                break
        }
        // TODO: connect to reverb and delay instead
        synth.connect(getDestination())
        synth.play(params, time)
    }, "48n");

    return {
        play: () => Transport.start(),
        stop: () => {
            count = -1
            Transport.stop()
        },
        setParams: (ps) => {
            params = ps;
            synth && synth.mutate(params);
        },
        setType: (type) => synthType = type,
        setDuration: (dur) => duration = dur,
    }
}

export default synthesis()