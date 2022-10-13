import { Reverb, FeedbackDelay, Limiter, Gain } from "tone";

export const limiter = new Limiter(-1).toDestination()
export const gain = new Gain(2).connect(limiter)
export const reverb = new Reverb(4).connect(gain)
export const delay = new FeedbackDelay('4n', 0.5).connect(reverb)