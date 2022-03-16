import { io } from "socket.io-client";

export function connect() {
    const address= "http://127.0.0.1:5000"
    const socket = io(address);  
    const { id } = socket
    
    socket.on("connect", () => {
        console.log("connected to server", id);
        alert("connected to server " + id);
    });

    socket.on("disconnect", () => {
        console.log("server disconnected", id);
        alert("server disconnected " + id);
    });
    
    socket.on("response", data => console.log(data));
}