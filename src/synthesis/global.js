import * as Tone from 'tone'
import { Reverb, FeedbackDelay, Limiter, Gain } from "tone";

const context = new Tone.Context({ lookAhead: 0 });
// Tone.setContext(context);
Tone.context.lookAhead = 0

console.log(Tone.context.lookAhead, context.lookAhead)

export const limiter = new Limiter(-1).toDestination()
export const gain = new Gain(2).connect(limiter)
export const reverb = new Reverb(4).connect(gain)
export const delay = new FeedbackDelay('4n', 0.5).connect(reverb)