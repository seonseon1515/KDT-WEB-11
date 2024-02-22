// 헷갈리면 파일명 바꿔도 됨

const express = require('express');
const router = express.Router();
const controller = require('../controller/comment')
//..comtroller/index.js가 아니므로 뒤에 경로 더 적기


// router
router.get('/',controller.main );

router.get('/comments', controller.comments);

router.get('/comment/:page',controller.comment);

// 외부에서 라우터 변수를 쓸 수 있게끔!
module.exports = router;