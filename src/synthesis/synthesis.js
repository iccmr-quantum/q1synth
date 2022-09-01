import { Loop, Transport } from "tone";
import { synth } from "../sound";
import { SynthType } from "./synthesisSlice";

const synthesis = () => {
    let params = {};
    let synthType = 'fm'
    let duration = 1;
    let count = 0
    
    new Loop((time) => {
        if(count%Math.floor(48/duration)) return
        switch(synthType) {
            case 'fm':
                // fm(time)
                break
            case 'granular':
                // am(time)
                break
            case 'subtractive':
                // noise(time)
                break
            default:
                // fm
                break
        }
        count++;
    }, "48n").start(0);

    return {
        play: () => Transport.start(),
        stop: () => Transport.stop(),
        setParams: (ps) => {
            params = ps;
            synth && synth.mutate(params);
        },
        setType: (type) => synthType = type,
        setDuration: (dur) => duration = dur,
    }
}

export default synthesis()