const express = require('express');
const router = express.Router();

// 메인페이지
router.get('/',main);

module.exports = router;