export function constrain(val : number, min: number, max: number) : number {
    return val < min ? min
      : val > max ? max
      : val;
}

export const sum = (a: number, b: number) => a + b

export function mapToRange(
    x: number, 
    inMin: number, 
    inMax: number, 
    outMin: number, 
    outMax: number
) : number {
    return ((x - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

export function average(...args: number[]) {
    return args.reduce(sum, 0) / args.length
}