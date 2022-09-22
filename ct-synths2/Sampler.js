import { Player, context, Transport } from "tone";
import BaseSynth from "./BaseSynth";

// TODO: presets

class Sampler extends BaseSynth {    
    synth;
    #q = 48
    #n = 60
    #buffer
    #begin = 0
    #rate = 1
    #snap = 1
    #playbackRate = 1

    constructor(buffer, fxParams) {
        super(fxParams)
        this.#buffer = buffer
        this.#initGraph()
    }

    #initGraph() {
        this.synth = new Player({fadeOut: 0.1})
        this.synth._buffer.set(this.#buffer)
        this.synth.connect(this.envelope)
        this.envelope.set({attack: 0, decay: 10, sustain: 1, release: 0.1})
    }

    #calculatePlaybackRate() {
        return this.#rate * Math.pow(2, (this.#n - 60)/12) * this.#snap || 0.001
    }

    #setPlaybackRate() {
        this.#playbackRate = this.#calculatePlaybackRate()
        this.synth.set({playbackRate: this.#playbackRate})
    }

    #mutatePlaybackRate(time, lag = 0.1) {
        this.synth._activeSources
            .forEach(s => s 
                && s.playbackRate.exponentialRampTo(this.#calculatePlaybackRate(), lag, time)
            )
    }

    #formatParams(params) {
        return {
            ...params,
            note: params.n || this.#n
        }
    }

    play(params = {}, time) {
        this.time = time
        this.setParams(this.#formatParams(params))
        
        const duration = params.dur || (this.#buffer.length/context.sampleRate) / this.#playbackRate

        this.synth.start(this.time, this.#begin, duration)
        this.envelope.triggerAttackRelease(duration, this.time, this.amplitude)
        
        this.endTime = time + duration + 0.1
        this.dispose(this.endTime)
    }
    
    set note(value) {
        this.#n = value 
        this.#setPlaybackRate()
    }
    
    set begin(value) { this.#begin = (this.#buffer.length/context.sampleRate) * value}
    set rate(value) { 
        this.#rate = value 
        this.#setPlaybackRate()
    }
    
    set q(value) { this.#q = value}
    set snap(value) {
        const { bpm } = Transport
        const sampleLength = this.#buffer.length/context.sampleRate
        const snapLength = (60/bpm.value/this.#q) * value
        this.#snap = sampleLength/snapLength
        console.log(this.#snap)
        this.#setPlaybackRate()
    }

    _n(value, time, lag = 0.1) { 
        this.#n = value
        this.#mutatePlaybackRate(time, lag)
    }
    _n = this._n.bind(this)

    _rate(value, time, lag = 0.1) { 
        this.#rate = value
        this.#mutatePlaybackRate(time, lag)
    }
    _rate = this._rate.bind(this)
}

export default Sampler