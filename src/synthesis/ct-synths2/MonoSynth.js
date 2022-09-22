import { formatCurve } from "./utils/tone";
import { MonoSynth } from "tone";
import BaseSynth from "./BaseSynth";

// TODO: presets
class MnSynth extends BaseSynth {    
    constructor(fxParams) {
        super(fxParams)
        this.#initGraph()
    }

    #initGraph() {
        this.synth = new MonoSynth()
        this.envelope.dispose() // not needed
        this.envelope = this.synth.envelope
        this.filterEnvelope = this.synth.filterEnvelope
        this.synth.connect(this.panner)
    }

    set moda(value) { this.filterEnvelope.attack = value }
    set modd(value) { this.filterEnvelope.decay = value }
    set mods(value) { this.filterEnvelope.sustain = value }
    set modr(value) { this.filterEnvelope.release = value }

    set modacurve(value) { this.filterEnvelope.attackCurve = formatCurve(value) }
    set moddcurve(value) { this.filterEnvelope.decayCurve = formatCurve(value) }
    set modrcurve(value) { this.filterEnvelope.releaseCurve = formatCurve(value) }
}


export default MnSynth