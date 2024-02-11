const express = require('express');
const router = express.router();
const controller = require('../controller/user')

router.get('/', controller.user)

module.exports = router;