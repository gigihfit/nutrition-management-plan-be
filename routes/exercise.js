var express = require('express');
var router = express.Router();
const checkIsLoggedIn = require('../middleware/authMiddleware');

module.exports = router;