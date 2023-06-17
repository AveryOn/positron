const express = require('express');
const router = express.Router();
const actions = require('../database/actions.js');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.send('Express Server');
});


module.exports = router;
