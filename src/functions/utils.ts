export function constrain(val : number, min: number, max: number) : number {
    return val < min ? min
      : val > max ? max
      : val;
}

export function mapToRange(
    x: number, 
    in_min: number, 
    in_max: number, 
    out_min: number, 
    out_max: number
) : number {
    return ((x - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}