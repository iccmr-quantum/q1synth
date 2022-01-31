import { Preset } from "../dataSlice"

const preset: Preset = {
	leftA: {
		freq: {
			value: 0.69,
			label: "freq",
			min: 70,
			max: 1000
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
			value: 0.75,
			label: "mod index",
			min: 0,
			max: 20
		},
		harmonicity: {
			value: 0.55,
			label: "harmonicity",
			min: 1,
			max: 20
		}
	},
	rightA: {
		freq: {
			value: 0.64,
			label: "freq",
			min: 70,
			max: 1000
		},
		volume: {
			value: 0.5,
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
			value: 0,
			label: "mod index",
			min: 0,
			max: 20
		},
		harmonicity: {
			value: 0.8,
			label: "harmonicity",
			min: 1,
			max: 20
		}
	},
	env: {
		attack: {
			value: 1,
			label: "attack",
			min: 0,
			max: 1
		},
		decay: {
			value: 0.5,
			label: "decay",
			min: 0,
			max: 1
		},
		sustain: {
			value: 0.5,
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
			value: 0,
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