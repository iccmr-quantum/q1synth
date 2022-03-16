import { io } from 'socket.io-client';

type connectionHandler = (status: boolean, id?: string) => void
type responseHandler = (data: any) => void

export function connect(
    handleConnection : connectionHandler, 
    handleResponse : responseHandler
) {
    const address= 'http://127.0.0.1:5000'
    const socket = io(address);  
    
    socket.on('connect', () => handleConnection(true, socket.id))
    socket.on('disconnect', () => handleConnection(false))
    socket.on('response', handleResponse);
}