import { io } from 'socket.io-client';
import { degreesToRadians as dtr } from '../functions/utils'
import type { AppDispatch } from '../app/store';
import { setQasmResponse } from './qasmSlice'

type connectionHandler = (id?: string) => void
interface PromiseCallback {
    (anything: any) : any
}

const qasmSocket = io('http://127.0.0.1:5000', {reconnectionAttempts: 1, timeout: Infinity});

export function connectSocQasm(
    handleConnection : connectionHandler,
    dispatch: AppDispatch
) {
    qasmSocket.on('connect', () => handleConnection(qasmSocket.id))
    qasmSocket.on('disconnect', () => dispatch(setQasmResponse('Qasm backend disconnected. \rPress escape to simulate calculation')))
    qasmSocket.on('response', data => data[0] === 'info' && dispatch(setQasmResponse(data[1])))
}

export function sendQasm(x: number, y: number, z: number, backend: string) {
    const qasmCode = `OPENQASM 2.0;\ninclude "qelib1.inc";\nqreg q[1];\ncreg c[1];\nu(${dtr(x)},${dtr(y)},${dtr(z)}) q[0];\nmeasure q[0] -> c[0];\n`
    qasmSocket.emit('QuTune', qasmCode, 1, backend)
}

export function receiveQasm(resolve: PromiseCallback, reject: PromiseCallback) {
    qasmSocket.on('response', data => {
        data[0] === 'error' && setTimeout(() => reject(data), 3000);
        data[0] === 'counts' && setTimeout(() => resolve(parseInt(data[1].charAt(0))), 3000);
    });
}