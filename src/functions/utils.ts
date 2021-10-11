export function constrain(val : number, min: number, max: number) : number {
    return val < min ? min
      : val > max ? max
      : val;
}

export function mapToRange(
    x: number, 
    inMin: number, 
    inMax: number, 
    outMin: number, 
    outMax: number
) : number {
    return ((x - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}