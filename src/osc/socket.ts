import osc from 'osc'

export const oscSocket = new osc.WebSocketPort({
    url: "ws://localhost:8080",
    metadata: true
});

let oscSocketIsConnected = false

export function connectOsc() {
    oscSocket.open()
    oscSocket.on("ready", () => {
        alert('Successfully connected to osc backend')
        oscSocketIsConnected = true
    });
}

export function sendXyz(x: number, y: number, z: number, id: string) {
    oscSocketIsConnected && oscSocket.send({
        address: `/q1synth/${id}/xyz`,
        args: [
            {type: "f", value: x},
            {type: "f", value: y},
            {type: "f", value: z},
        ]
    })
}