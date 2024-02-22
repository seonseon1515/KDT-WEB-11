const express = require('express');
const db = require('./models/index.js');
const app = express();
const PORT = 8000;

//미들웨어
app.set('view engine', 'ejs');
app.use(express.json());

//라우터
const indexRouter = require('./routes');
app.use('/', indexRouter);
const postRouter = require('./routes/post');
app.use('/api/post', postRouter);

app.get('*', (req, res) => {
    res.status(404).render('404');
});

// 테이블 싱크(동기화?)
// force:ture - 항상 테이블을 삭제 후 재생성
// force : false (기본값) - 테이블이 존재하면 패스, 없으면 생성

db.sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    });
});
