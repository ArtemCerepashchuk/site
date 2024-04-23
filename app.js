const WebSocket = require('ws');

const ws = new WebSocket.Server({ port: 3000 });

ws.on('connection', (ws) => {
    console.log('connection connected!')
    ws.send("Hello from WS-Server!")
}); 