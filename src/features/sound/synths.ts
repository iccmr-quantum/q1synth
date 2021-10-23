import * as Tone from 'tone'
import { SynthArgs } from './'

export const makeSynth = () => {
    const limiter = new Tone.Limiter(-20).toDestination();
    const reverb = new Tone.Reverb().connect(limiter);
    reverb.set({ decay: 5 });
    const synth = new Tone.FMSynth().connect(reverb)
    synth.set({portamento: 0.1})

    const setParams = (args: SynthArgs) => {
        const { freq, volume, modulationIndex, harmonicity, reverb: wet, envelope, modulationEnvelope } = args
        synth.setNote(freq)
        synth.volume.rampTo(volume, 0.25)
        synth.set({ harmonicity, modulationIndex, envelope, modulationEnvelope })
        reverb.set({ wet });
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
                synth.triggerAttack(freq, "+0.1")
                return methods()
            },
            off: (args: SynthArgs) => { 
                synth.triggerRelease()  
                return methods()
            },
            play: (args: SynthArgs, duration: Tone.Unit.Time) => {
                const { freq } = args
                setParams(args)
                synth.triggerAttackRelease(freq, duration)
                return methods()
            }
        }
    }()
}