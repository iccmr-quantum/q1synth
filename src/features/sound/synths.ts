import * as Tone from 'tone'

interface SynthArgs {
    freq: number
    amp: number
}

export const makeSynth = ({freq, amp} : SynthArgs) => {
    const synth = new Tone.FMSynth().toDestination()
    let frequency = freq
    let amplitude = amp <= 1 ? amp : 1

    return function methods() {
        return {
            on: () => {
                synth.triggerAttack(frequency, Tone.now(), amplitude)
                return methods()
            },
            off: () => { 
                synth.triggerRelease()
                return methods()
            }
        }
    }()
}