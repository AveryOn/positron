// const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const websocket = require('./websocket.js');
const http = require('http');
const indexRouter = require('./routes/main');
const usersRouter = require('./routes/users');
const database = require('./database/database.js');

// Экземпляр сервера
const app = express();
const server = http.createServer(app);

// Функция создает сервер веб-сокета
const server_WS = websocket.WebSocketServer(server, 'http://localhost:8080');

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
// Маршруты сервера
app.use('/', indexRouter);
app.use('/users', usersRouter);

// Подключение сокетов
server_WS.on('connection', (socket) => {
    console.log('A new client connect!');
    socket.on('disconnect', () => {
        console.log('A client has been disconnect!:');
    })

})

// Запуск сервера
server.listen(app.get('port'), () => {
    console.log(`Express Server has been started on: http://localhost:${app.get('port')}`);
});
