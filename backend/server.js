const path = require('path');
const fs = require('fs');
const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const websocket = require('./websocket.js');
const http = require('http');
const database = require('./database/database.js');

const app = express();
const server = http.createServer(app);

const server_WS = websocket.WebSocketServer(server, 'http://localhost:8080');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

// CORS options 
const corsOptions = {
    "origin": "http://localhost:8080",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}

app.set('port', process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Routes
app.use('/', indexRouter);
app.use('/users', usersRouter);

const fileID = path.resolve(__dirname, 'id_list', 'usersID.json');

server_WS.on('connection', (socket) => {
    console.log('A new client connect!');
    socket.on('disconnect', () => {
        console.log('A client has been disconnect!:');
    })

})

server.listen(app.get('port'), () => {
    console.log(`Express Server has been started on: http://localhost:${app.get('port')}`);
});
