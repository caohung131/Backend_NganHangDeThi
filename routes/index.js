var express = require('express');
const userRouter = require('./users.js')
var router = express.Router();

/* GET home page. */
router.use('/', userRouter);

module.exports = router;
