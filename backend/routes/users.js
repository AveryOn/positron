const express = require('express');
const router = express.Router();


/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('Route USERS');
});

router.post('/', function (req, res, next) {
    res.send('Route USERS');
});


module.exports = router;
