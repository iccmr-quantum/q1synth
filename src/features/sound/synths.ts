import * as Tone from 'tone'
import { mapToRange } from '../../functions/utils';
import { SynthArgs } from './'

export const makeSynth = () => {
    const limiter = new Tone.Limiter(-20).toDestination();
    const reverb = new Tone.Reverb().connect(limiter);
    reverb.set({ decay: 5 });
    
    const synthL = new Tone.FMSynth().connect(reverb)
    synthL.set({portamento: 0.1, oscillator: {type: 'sine'}})

    const synthR = new Tone.FMSynth().connect(reverb)
    synthR.set({portamento: 0.1, oscillator: {type: 'sawtooth'}})

    const setParams = (args: SynthArgs) => {
        const { freq, volume, modulationIndex, harmonicity, reverb: wet, envelope, modulationEnvelope, blend } = args

        reverb.set({ wet });
        
        synthL.setNote(freq)
        synthL.set({ harmonicity, modulationIndex, envelope, modulationEnvelope })
        synthL.volume.rampTo(volume * mapToRange(blend, 0, 1, 1, 0), 0.25)

        synthR.setNote(freq)
        synthR.set({ harmonicity, modulationIndex, envelope, modulationEnvelope })
        synthR.volume.rampTo(volume * blend, 0.25)
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
            off: (args: SynthArgs) => { 
                synthL.triggerRelease()  
                synthR.triggerRelease()  
                return methods()
            },
            play: (args: SynthArgs, duration: Tone.Unit.Time) => {
                const { freq } = args
                setParams(args)
                synthL.triggerAttackRelease(freq, duration)
                synthR.triggerAttackRelease(freq, duration)
                return methods()
            }
        }
    }()
}