import { Transport, Reverb, FeedbackDelay, immediate, Limiter, ToneAudioBuffer} from "tone";
import { CtFMSynth, CtGranular, CtDualSynth } from "./ct-synths"; // TODO: replace this with node_module
import { beatsToSeconds, formatMutationParams } from "./utils";

const limiter = new Limiter(-1).toDestination()
const reverb = new Reverb(4).connect(limiter)
const delay = new FeedbackDelay('4n', 0.5).connect(reverb)

const urls = [
    'https://tonejs.github.io/audio/berklee/arpeggio3crazy.mp3',
    'https://tonejs.github.io/audio/berklee/taps_1c.mp3',
    'https://tonejs.github.io/audio/berklee/tinkle3.mp3',
    'https://tonejs.github.io/audio/berklee/tapping1.mp3',
    'https://tonejs.github.io/audio/berklee/gong_1.mp3',
    'https://tonejs.github.io/audio/berklee/gurgling_theremin_1.mp3'
]
const samples = urls.map(url => url.substring(url.lastIndexOf('/') + 1))
const buffers = urls.map(url => new ToneAudioBuffer(url))

const synthesis = () => {
    let synths = []
    let params = {n: 48, reverb: 0, delay: 0, pan: 0}
    let synthType = 'fm'
    let q = 128;
    let count = -1
    let buffer = 0
    
    Transport.scheduleRepeat((time) => {
        count++;
        synths && synths.map(s => s.mutate(formatMutationParams(params), immediate(), 0.01));
        reverb.wet.rampTo(params.reverb, 0.1)
        delay.feedback.rampTo(params.delay, 0.1)
        synths = synths.slice(-4);
        
        if(count%Math.floor(q)) return
        console.log(count)

        let synth;

        switch(synthType) {
            case 'fm':
                synth = new CtFMSynth(params)
                break
            case 'granular':
                synth = new CtGranular(buffers[buffer], params)
                break
            case 'subtractive':
                synth = new CtDualSynth(params)
                break
            default:
                synth = new CtFMSynth(params)
                break
        }
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
            count = -1
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
        buffers: samples
    }
}

export default synthesis()