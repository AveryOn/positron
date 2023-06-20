// Маршрут для обработки пользовательсих запросов
const express = require('express');
const users = express.Router();
const userActions = require('../database/actions');


users.get('/', function (req, res, next) {
    res.send('Route USERS');
});

users.post('/', function (req, res, next) {
    res.send('Route USERS');
});

users.post('/create-user', (req, res, next) => {
    const userDatareq = req.body;
    console.log(userDatareq);
})


module.exports = users;
