const express = require('express');
const { main, post } = require('../controller/index.js');
// index는 .js 생략 가능
// 코드를 다른 방식으로 쓸 줄 알아야 됨

const router = express.Router;

router.get('/', main); // 메인페이지
router.get('/post', post); //게시판 페이지
router.get('/post/:id',detail);
router.get('/write', write);

module.exports = router;
