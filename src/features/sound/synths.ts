import * as Tone from 'tone'
import { SynthArgs } from './'

export const makeSynth = () => {
    const limiter = new Tone.Limiter(-20).toDestination();
    const reverb = new Tone.Reverb().connect(limiter);
    reverb.set({ decay: 5 });
    const synth = new Tone.FMSynth().connect(reverb)
    synth.set({portamento: 0.1})

    const setParams = (args: SynthArgs) => {
        const { freq, volume, modulationIndex, harmonicity, reverb: wet } = args
        synth.setNote(freq)
        synth.volume.rampTo(volume, 0.25)
        synth.set({ harmonicity, modulationIndex })
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
                synth.triggerAttack(freq, Tone.now())
                return methods()
            },
            off: (args: SynthArgs) => { 
                synth.triggerRelease()  
                return methods()
            }
        }
    }()
}