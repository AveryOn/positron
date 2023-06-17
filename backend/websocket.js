const { Server } = require("socket.io");
const fs = require('fs');


// Функция создает сервер веб-сокета
function WebSocketServer(server, host = '') {
    const io = new Server(server, {
        cors: {
            origin: host,
            methods: ['GET', 'POST'],
            credentials: true,
        }
    });
    return io;
}

module.exports = {
    WebSocketServer,
}