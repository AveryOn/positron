const express = require('express');
const main = express.Router();
const userActions = require('../database/actions/');

/* GET home page. */
main.get('/', function (req, res, next) {
    res.send('Express Server');
});



module.exports = main;
