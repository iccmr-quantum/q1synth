import { mtf } from "./utils/core";
import { formatCurve } from "./utils/tone";
import { FMSynth } from "tone";
import BaseSynth from "./BaseSynth";

// TODO: presets

class FM extends BaseSynth {    
    constructor(params) {
        super(params)
        this.#initGraph()
    }

    #initGraph() {
        this.synth = new FMSynth()
        this.envelope.dispose() // not needed
        this.envelope = this.synth.envelope
        this.synth.connect(this.panner)
    }

    set moda(value) { this.synth.modulationEnvelope.attack = value }
    set modd(value) { this.synth.modulationEnvelope.decay = value }
    set mods(value) { this.synth.modulationEnvelope.sustain = value }
    set modr(value) { this.synth.modulationEnvelope.release = value }

    set modacurve(value) { this.synth.modulationEnvelope.attackCurve = formatCurve(value) }
    set moddcurve(value) { this.synth.modulationEnvelope.decayCurve = formatCurve(value) }
    set modrcurve(value) { this.synth.modulationEnvelope.releaseCurve = formatCurve(value) }    
    
    set modcurve(value) { 
        this.modacurve = formatCurve(value)
        this.moddcurve = formatCurve(value)
        this.modrcurve = formatCurve(value)
    }

    set harm(value) { this.synth.harmonicity.setValueAtTime(value, this.time) }
    set modi(value) { this.synth.modulationIndex.setValueAtTime(value, this.time) }

    _harm(value, time, lag = 0.1) { this.synth.harmonicity.rampTo(value, lag, time) }
    _harm = this._harm.bind(this)

    _modi(value, time, lag = 0.1) { this.synth.modulationIndex.rampTo(value, lag, time) }
    _modi = this._modi.bind(this)
}


export default FM