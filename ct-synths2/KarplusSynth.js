import { PluckSynth } from "tone";
import BaseSynth from "./BaseSynth";

// TODO: presets
class Karplus extends BaseSynth {   
    constructor(fxParams) {
        super(fxParams)
        this.#initGraph()
    }

    #initGraph() {
        this.synth = new PluckSynth()
        this.envelope.set({attack: 0.01, decay: 0, sustain: 1, release: 0.1})
        this.synth.connect(this.envelope)
    }

    set resonance(value) { this.synth.resonance = value }
    set res(value) { this.synth.resonance = value }
    set dampening(value) { this.synth.dampening = value }
    set damp(value) { this.synth.dampening = value }
}


export default Karplus