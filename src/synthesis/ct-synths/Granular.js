import { GrainPlayer, context, Signal, Clock, Transport, now } from "tone";
import BaseSynth from "./BaseSynth";
import { beatsToSeconds } from "./utils/tone";

// TODO: presets
// TODO: strange behaviour from grain size, seems to affect playback position
class Granular extends BaseSynth {    
    #q = 48
    #n = 60
    #begin = 0
    #bufferLength
    rateRamp
    clock
    
    constructor(buffer, params) {
        super(params)
        this.#bufferLength = buffer.length/context.sampleRate
        this.#initGraph(buffer)
    }

    #initGraph(buffer) {
        // don't initialise values - causes bugs
        this.synth = new GrainPlayer({
            loop: true, 
            url: buffer, 
        })
        this.synth.connect(this.envelope)
        this.envelope.set({attack: 0.1, decay: 0, sustain: 1, release: 0.1})
        this.rateRamp = new Signal(this.synth.playbackRate, 'number')
        this.pitchRamp = new Signal(0, 'number')
        this.sizeRamp = new Signal(this.synth.grainSize, 'number')
        this.clock = new Clock(time => {
            this.synth.set({
                playbackRate: this.rateRamp.getValueAtTime(time),
                detune: this.pitchRamp.getValueAtTime(time),
                grainSize: this.sizeRamp.getValueAtTime(time)
            });
        }, 48).start();
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
        
        const duration = (params.dur || this.duration)
        this.synth.start(this.time, this.#begin, duration * 2) // * 2 to account for bug in grainplayer
        
        this.envelope.triggerAttackRelease(duration, this.time, this.amplitude)
        
        this.endTime = time + duration + 0.1
        this.dispose(this.endTime)
    }


    on(params = {}, time) {
        this.time = time
        this.setParams(this.#formatParams(params))
        
        this.synth.start(this.time, this.#begin)
        this.envelope.triggerAttack(time, this.amplitude)
    }

    off(time) {
        this.envelope.triggerRelease()
        this.endTime = time + this.envelope.release + 0.05
        this.synth.stop(this.endTime)
        this.dispose(this.endTime)
    }

    set note(value) { 
        const detune = ((value + (this.octave * 12)) - 60) * 100
        this.pitchRamp.value = detune
        this.synth.detune = detune
    }

    set q(value) { this.#q = value}

    set snap(value) {
        const { bpm } = Transport
        const snapLength = (60/bpm.value/this.#q) * value
        const snap = this.#bufferLength/snapLength
        this.rateRamp.value = snap
        this.synth.playbackRate = snap
    }

    set begin(value) { this.#begin = this.#bufferLength * value }
    set end(value) { this.synth.set({loopEnd: this.#bufferLength * value}) }
    set overlap(value) { this.synth.set({overlap: beatsToSeconds(value || 1/16)}) }

    set rate(value) { 
        this.rateRamp.value = value
        this.synth.playbackRate = value
    }
    set size(value) { 
        const size = beatsToSeconds(value)
        this.synth.grainSize = size
        this.sizeRamp.setValueAtTime(size, this.time)
    }
    set direction(value) { this.synth.set({reverse: value < 0})}

    // Speed at which the playback moves through the buffer, overwritten by snap
    _rate(value, time, lag = 0.1) { 
        this.rateRamp.cancelScheduledValues(time)
        this.rateRamp.rampTo(value, lag, time)
    }
    _rate = this._rate.bind(this)
    
    // grain pitch - assumes note 60 is original speed of sample
    _n(value, time, lag = 0.01) {
        const detune = ((value + (this.octave * 12)) - 60) * 100
        this.pitchRamp.cancelScheduledValues(time)
        this.pitchRamp.rampTo(Math.floor(detune), lag/10, time)
    }
    _n = this._n.bind(this)

    // grain size
    _size(value, time, lag = 0.01) {
        const size = beatsToSeconds(value)
        // find out length of samples
        this.sizeRamp.cancelScheduledValues(time)
        this.sizeRamp.rampTo(size, lag, time)
    }
    _size = this._size.bind(this)    
}

export default Granular