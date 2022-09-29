import { Reverb, FeedbackDelay, Limiter } from "tone";

export const limiter = new Limiter(-1).toDestination()
export const reverb = new Reverb(4).connect(limiter)
export const delay = new FeedbackDelay('4n', 0.5).connect(reverb)