import * as Tone from 'tone'
import { mapToRange } from '../functions/utils';
import { SynthArgs } from '.'

export const makeSynth = () => {
    const limiter = new Tone.Limiter(-20)
    limiter.toDestination();
    
    const recorder = new Tone.Recorder();
    limiter.connect(recorder);

    const reverb = new Tone.Reverb().connect(limiter);
    reverb.set({ decay: 5 });

    const lfo = new Tone.LFO("4n", 0, 1).start()
    
    const gainL = new Tone.Gain(1).connect(reverb)
    const synthL = new Tone.FMSynth().connect(gainL)
    lfo.connect(gainL.gain);
    synthL.set({portamento: 0.1, oscillator: {type: 'sine'}})

    const gainR = new Tone.Gain(0).connect(reverb)
    const synthR = new Tone.FMSynth().connect(gainR)
    lfo.connect(gainR.gain);
    synthR.set({portamento: 0.1, oscillator: {type: 'square'}})

    const setParams = (args: SynthArgs) => {
        const { freq, volume, modulationIndex, harmonicity, reverb: wet, envelope, modulationEnvelope, blend, lfoDepth, lfoFreq } = args

        reverb.set({ wet });
        lfo.frequency.rampTo(lfoFreq, 0.25)
        lfo.set({min: 1 - lfoDepth})
        
        synthL.setNote(freq)
        synthL.set({ harmonicity, modulationIndex, envelope, modulationEnvelope })
        synthL.volume.rampTo(volume * mapToRange(blend, 0, 1, 1, 0), 0.25)

        synthR.setNote(freq)
        synthR.set({ harmonicity, modulationIndex, envelope, modulationEnvelope })
        synthR.volume.rampTo(volume * blend, 0.25)
    }

    const record = () => recorder.start()

    const downloadRecording = async () => {
        const recording = await recorder.stop();
        
        // download the recording by creating an anchor element and blob url
        const url = URL.createObjectURL(recording);
        const anchor = document.createElement("a");
        anchor.download = "recording.webm";
        anchor.href = url;
        anchor.click();
    }

    return function methods() {
        return {
            set: (args: SynthArgs) => {
                setParams(args)
                return methods()
            },
            on: (args: SynthArgs) => {
                const { freq } = args
                setParams(args)
                synthL.triggerAttack(freq, "+0.1")
                synthR.triggerAttack(freq, "+0.1")
                return methods()
            },
            off: () => { 
                synthL.triggerRelease()  
                synthR.triggerRelease()  
                return methods()
            },
            play: (args: SynthArgs, duration: Tone.Unit.Time, shouldRecord: boolean) => {
                const { freq } = args
                setParams(args)

                shouldRecord && record();
                
                synthL.triggerAttackRelease(freq, duration)
                synthR.triggerAttackRelease(freq, duration)
                
                shouldRecord && setTimeout(downloadRecording, (+duration + 3) * 1000);
                
                return methods()
            }
        }
    }()
}