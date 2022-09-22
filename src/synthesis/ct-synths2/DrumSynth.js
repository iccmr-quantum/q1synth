import { mtf } from "./utils/core";
import { MembraneSynth } from "tone";
import BaseSynth from "./BaseSynth";

// TODO: presets

class DrumSynth extends BaseSynth {
    constructor(fxParams) {
        super(fxParams)
        this.#initGraph()
    }

    #initGraph() {
        this.synth = new MembraneSynth()
        this.envelope.dispose() // not needed
        this.envelope = this.synth.envelope
        this.synth.connect(this.panner)
    }

    set octs(value) { this.synth.octaves = value }
}


export default DrumSynth