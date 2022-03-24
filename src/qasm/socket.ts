import { io } from 'socket.io-client';


type connectionHandler = (status: boolean, id?: string) => void
export const socket = io('http://127.0.0.1:5000');

export function connect(
    handleConnection : connectionHandler
) {    
    socket.on('connect', () => handleConnection(true, socket.id))
    socket.on('disconnect', () => handleConnection(false))
}