import { io } from 'socket.io-client';
import { degreesToRadians as dtr } from '../functions/utils'
import type { AppDispatch } from '../app/store';
import { setQasmResponse } from './qasmSlice'

type connectionHandler = (id?: string) => void
interface PromiseCallback {
    (anything: any) : any
}

const socket = io('http://127.0.0.1:5000', {reconnectionAttempts: 10, timeout: Infinity});

export function connect(
    handleConnection : connectionHandler,
    dispatch: AppDispatch
) {
    socket.on('connect', () => handleConnection(socket.id))
    socket.on('disconnect', () => dispatch(setQasmResponse('Qasm backend disconnected. \rPress escape to simulate calculation')))
    socket.on('response', data => data[0] === 'info' && dispatch(setQasmResponse(data[1])))
}

export function send(x: number, y: number, z: number, backend: string) {
    // TODO: what is going on here?
    const qasmCode = `OPENQASM 2.0;\ninclude "qelib1.inc";\nqreg q[1];\ncreg c[1];\nu(${dtr(x)}/2,${dtr(y)}/2,${dtr(z)/2}) q[0];\nmeasure q[0] -> c[0];\n`
    socket.emit('QuTune', qasmCode, 1, backend)
}

export function receive(resolve: PromiseCallback, reject: PromiseCallback) {
    socket.on('response', data => {
        data[0] === 'error' && setTimeout(() => reject(data), 3000);
        data[0] === 'counts' && setTimeout(() => resolve(parseInt(data[1].charAt(0))), 3000);
    });
}