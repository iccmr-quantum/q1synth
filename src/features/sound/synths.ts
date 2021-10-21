import * as Tone from 'tone'
import { SynthArgs } from './'

export const makeSynth = () => {
    const limiter = new Tone.Limiter(-20).toDestination();
    const reverb = new Tone.Reverb().connect(limiter);
    reverb.set({ decay: 5 });
    const synth = new Tone.FMSynth().connect(reverb)

    return function methods() {
        return {
            on: (args: SynthArgs) => {
                const { freq, amp, modIndex: modulationIndex, harmonicity, reverb: wet } = args
                
                synth.set({ harmonicity, modulationIndex })
                reverb.set({ wet });

                synth.triggerAttack(freq, Tone.now(), amp)
                
                return methods()
            },
            off: (args: SynthArgs) => { 
                synth.triggerRelease()  
                return methods()
            }
        }
    }()
}