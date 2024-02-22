const express = require('express');
const app = express();
const PORT = 8000;

// 오타 조심하기
// 백엔드 과정
//body-parser
// 순서 지켜서 쓰기. 뒤죽박죽되면 코드가 안 먹힘

app.use(express.urlencoded({ extended: true })); // x-www-from-urlencoded 방식
app.use(express.json()); //json 방식

// view engine -> 왜 하는 건지?
app.set('view engine', 'ejs');
app.set('views', './views');

// ejs 설치하는 과정 빼먹지 않기
// npm install ejs

// 페이지 만들기 router 총 2개의 라우터
// 페이지가 열리게 하는 역할
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/getForm', (req, res) => {
    //get 방식일 때 data?를 받는 방법
    console.log('req.query');
    res.render('result.ejs', { title: 'GET요청 결과', userInfo: req.query });
    // 랜더링
    //프론트로 객체를 보내는 과정(res.send는 안되나?) 이거 콘솔창에 뜨는거였나?
});

// 라우터랑 url이랑 다름
app.post('/postForm', (req, res) => {
    //get 방식일 때 data?를 받는 방법
    console.log('req.body');
    res.render('result.ejs', { title: 'psot요청 결과', userInfo: req.body });
    // 랜더링
    //프론트로 객체를 보내는 과정
});

// 서버를 실행할 코드
// 코드 페이지 반영을 확인할 때 ctrl + c로 종료한 후 node index.js(페이지 확인)
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
