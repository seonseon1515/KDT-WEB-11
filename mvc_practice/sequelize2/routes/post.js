const express = require('express');
const controller = require('../controller/post');

const router = express.Router();

// GET /all 전체글 조회
router.get('/all', controller.all);

// 동일 주소일 때 순서 주의(all이 /:id1212에 들어갈 수 있음)
// GET    /post/:id 게시판 글 하나 조회
router.get('/:id1212', controller.post);
//POST /write 게시판 글 하나 작성
router.post('/write', controller.write);
// PATCH /update 게시판 글 하나 수정
router.patch('/update', controller.update)
//DELETE /delete 게시판 글 하나 삭제;
router.delete('/delete',controller.delete);




module.exports = router;
