import { Preset } from "../dataSlice"

const preset: Preset = {
	leftA: {
		freq: {
			value: 0,
			label: "freq",
			min: 70,
			max: 1000,
			title: '|+⟩'
		},
		volume: {
			value: 0.57,
			label: "amp",
			min: -50,
			max: -3
		},
		reverb: {
			value: 1,
			label: "reverb",
			min: 0,
			max: 0.8
		},
		modulationIndex: {
			value: 0.24,
			label: "mod index",
			min: 0,
			max: 20,
			title: '|-i⟩'
		},
		harmonicity: {
			value: 0.55,
			label: "harmonicity",
			min: 1,
			max: 20
		},
		lfoFreq: {value: 0, label: 'lfo freq', min: 0, max: 100, title: '-90°'},
        lfoDepth: {value: 0, label: 'lfo depth', min: 0, max: 1},
	},
	rightA: {
		freq: {
			value: 0.02,
			label: "freq",
			min: 70,
			max: 1000,
			title: '|-⟩'
		},
		volume: {
			value: 1,
			label: "amp",
			min: -50,
			max: -3
		},
		reverb: {
			value: 1,
			label: "reverb",
			min: 0,
			max: 0.8
		},
		modulationIndex: {
			value: 1,
			label: "mod index",
			min: 0,
			max: 20, 
			title: '|i⟩'
		},
		harmonicity: {
			value: 0.72,
			label: "harmonicity",
			min: 1,
			max: 20
		},
		lfoFreq: {value: 0, label: 'lfo freq', min: 0, max: 100, title: '90°'},
        lfoDepth: {value: 0, label: 'lfo depth', min: 0, max: 1},
	},
	env: {
		attack: {
			value: 0.01,
			label: "attack",
			min: 0,
			max: 1
		},
		decay: {
			value: 0,
			label: "decay",
			min: 0,
			max: 1
		},
		sustain: {
			value: 1,
			label: "sustain",
			min: 0,
			max: 1
		},
		release: {
			value: 0.5,
			label: "release",
			min: 0,
			max: 4
		}
	},
	modEnv: {
		attack: {
			value: 1,
			label: "attack",
			min: 0,
			max: 1
		},
		decay: {
			value: 1,
			label: "decay",
			min: 0,
			max: 1
		},
		sustain: {
			value: 0,
			label: "sustain",
			min: 0,
			max: 1
		},
		release: {
			value: 0.5,
			label: "release",
			min: 0,
			max: 4
		}
	}
}

export default preset