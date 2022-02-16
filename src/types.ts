export interface Dictionary { [index: string]: any }

export interface Value {
    value: number 
}

export interface Slider extends Value {
    label: string, 
    min: number, 
    max: number, 
    midicc?: number,
    title?: string
}