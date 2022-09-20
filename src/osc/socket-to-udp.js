const WebSocket = require("ws");
const osc = require("osc");

const udpPort = new osc.UDPPort({
    localAddress: "0.0.0.0",
    localPort: 57121,
    remoteAddress: "127.0.0.1",
    remotePort: 57120,
    metadata: true
});

udpPort.open();

const wss = new WebSocket.Server({ port: 8080 });

wss.on("connection", (socket) => {
    console.log("A Web Socket connection has been established!");
    const socketPort = new osc.WebSocketPort({
        socket: socket,
        metadata: true
    });

    // act as a relay, forwarding all websocket message on via udp - for SC
    new osc.Relay(socketPort, udpPort, {
        raw: true
    });
});
