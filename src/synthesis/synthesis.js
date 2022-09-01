import { Transport, Reverb, FeedbackDelay, immediate, getDestination } from "tone";
import { CtFMSynth, CtGranular, CtDualSynth } from "./ct-synths"; // TODO: replace this with node_module
import { formatMutationParams } from "./utils";

const reverb = new Reverb(4).toDestination()
const delay = new FeedbackDelay('4n', 0.5)

const synthesis = () => {
    let synths = []
    let params = {n: 36, dur: 1, amp: 0.5}
    let synthType = 'fm'
    let duration = 1;
    let count = -1
    
    Transport.scheduleRepeat((time) => {
        count++;
        synths && synths.map(s => s.mutate(formatMutationParams(params), immediate(), 0.01));
        synths = synths.slice(-4);
        
        if(count%Math.floor(48/duration)) return

        let synth;

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
        synth.chain(delay, reverb)
        synth.play(params, immediate())
        synths.push(synth)
    }, "48n");

    return {
        play: () => Transport.start(),
        stop: () => {
            count = -1
            Transport.stop()
        },
        setParams: (ps) => {
            params = ps;
            ps.reverb && (reverb.wet.rampTo(ps.reverb, 0.1))
            ps.delay && (delay.feedback.rampTo(ps.delay, 0.1))
        },
        setType: (type) => synthType = type,
        setDuration: (dur) => duration = dur,
    }
}

export default synthesis()