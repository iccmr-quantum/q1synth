import { io } from 'socket.io-client';
import { degreesToRadians as dtr } from '../functions/utils'

type connectionHandler = (status: boolean, id?: string) => void
interface PromiseCallback {
    (anything: any) : any
}

const socket = io('http://127.0.0.1:5000', {reconnectionAttempts: 1, timeout: Infinity});

export function connect(
    handleConnection : connectionHandler
) {    
    console.log('yes')
    socket.on('connect', () => handleConnection(true, socket.id))
    socket.on('disconnect', () => handleConnection(false))
}

export function send(x: number, y: number, z: number) {
    const qasmCode = `OPENQASM 2.0;\ninclude "qelib1.inc";\nqreg q[1];\ncreg c[1];\nu(${dtr(x)},${dtr(y)},${dtr(z)}) q[0];\nmeasure q[0] -> c[0];\n`
    socket.emit('QuTune', qasmCode, 1, 'qasm_simulator')
}

export function receive(resolve: PromiseCallback, reject: PromiseCallback) {
    socket.on('response', data => {
        data[0] === 'error' && reject(data);
        data[0] === 'counts' && resolve(parseInt(data[1].charAt(0)))
    });
}