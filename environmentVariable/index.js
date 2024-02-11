require('dotenv').config();

const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');

// .js는 생략 가능
// 해당 폴더의 index.js 는 생략 가능
// const router = require('./routes/index');
const router = require('./routes'); // 미들웨어 처리

// 전체 경로의 공통적인 이름
app.use('/', router);
// app.use('/board', router);

// 오류처리(use도 가능)
app.get('*', (req, res) => {
    res, status(404).render('404');
});



// 
app.listen(PORT, () => {
    console.log(`http:/localhost:${PORT}`);
});

const userRouter = require('./routes/user');
app.use('/user', userInfo);
