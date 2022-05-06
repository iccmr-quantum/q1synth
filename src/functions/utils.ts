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

export function shortestAngle(a: number, b: number) {
    const diff = a > b 
        ? a - b
        : b - a
    return Math.abs((diff + 180) % 360 - 180)
} 

export function blendBetweenValues(
    dial: number,
    values: number[],
    angles: number[]
) {
    return values.reduce((total, val, i) => {
        const angle = shortestAngle(dial, angles[i])
        const multiplier = mapToRange(angle, 0, 180, 0, 1)
        return total + (val * multiplier)
    }, 0) / (values.length / 2)
}

export const tossCoin = () => Math.floor(Math.random() * 2) === 0

export const tossWeightedCoin = (weightHeads: number) : boolean => Math.random() > weightHeads

export const degreesToRadians = (degrees: number) => degrees * (Math.PI/180)

export function getPolar(x: number, y: number, z: number) {
    const xR = degreesToRadians(360)
    const yR = degreesToRadians(360)
    const zR = degreesToRadians(360)
    return Math.atan(
        Math.sqrt(
            Math.pow(xR, 2) + Math.pow(yR, 2)
        ) / zR
    )
}