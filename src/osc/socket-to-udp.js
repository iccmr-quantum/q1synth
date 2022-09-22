const WebSocket = require("ws");
const osc = require("osc");

const udpPortSend = new osc.UDPPort({
    localAddress: "0.0.0.0",
    localPort: 57121,
    remoteAddress: "11.1.2.1",
    remotePort: 57120,
    metadata: true
});

const udpPortReceive = new osc.UDPPort({
    localAddress: "0.0.0.0",
    localPort: 57122,
    metadata: true
});

udpPortSend.open();
udpPortReceive.open();

const wss = new WebSocket.Server({ port: 8080 });

wss.on("connection", (socket) => {
    console.log("A Web Socket connection has been established!");
    const socketPort = new osc.WebSocketPort({
        socket: socket,
        metadata: true
    });

    // set up relays to send and receive messages
    new osc.Relay(socketPort, udpPortSend, {raw: true});
    new osc.Relay(socketPort, udpPortReceive, {raw: true});
});