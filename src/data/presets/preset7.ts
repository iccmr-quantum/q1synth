import { Preset } from "../dataSlice"

const preset: Preset = {
	leftA: {
		freq: {
			value: 1,
			label: "freq",
			min: 70,
			max: 1000,
			title: '|-i⟩'
		},
		volume: {
			value: 0.15,
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
			title: '|-⟩'
		},
		harmonicity: {
			value: 0,
			label: "harmonicity",
			min: 1,
			max: 20
		}
	},
	rightA: {
		freq: {
			value: 1,
			label: "freq",
			min: 70,
			max: 1000,
			title: '|i⟩'
		},
		volume: {
			value: 0.45,
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
			title: '|+⟩'
		},
		harmonicity: {
			value: 0.12,
			label: "harmonicity",
			min: 1,
			max: 20
		}
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
			value: 0.01,
			label: "release",
			min: 0,
			max: 4
		}
	},
	modEnv: {
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
			value: 0.01,
			label: "release",
			min: 0,
			max: 4
		}
	}
}

export default preset