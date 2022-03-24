import { socket } from './socket';

const qasmCode = `
OPENQASM 2.0;
include "qelib1.inc"; 
qreg q[2]; 
creg c[2]; 
h q[0]; 
cx q[0],q[1]; 
measure q[0] -> c[0]; 
measure q[1] -> c[1];
`

interface PromiseCallback {
    (anything: any) : any
}

export function send(z: number) {
    socket.emit('QuTune', qasmCode, 1, 'qasm_simulator')
}

export function receive(resolve: PromiseCallback, reject: PromiseCallback) {
    socket.on('response', data => {
        // data[0] === 'info' && // TODO: append to loading?
        data[0] === 'error' && reject(data);
        data[0] === 'counts' && resolve(data)
    });
}