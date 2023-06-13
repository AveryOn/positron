const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

// CORS options 
const corsOptions = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors(corsOptions));

// Routes
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

app.listen(app.get('port'), () => {
    console.log(`Express Server has been started on: http://localhost:${app.get('port')}`);
});
app.on('error', () => {
    throw error;
});
