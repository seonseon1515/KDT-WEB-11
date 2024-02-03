const express = require('express');
const app = express();
const PORT = 8000;

// body-parsor
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', './views');

//router
//+++ 페이지
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/submit', (req, res) => {
    res.render('submit');
});

app.get('/func', (req, res) => {
    res.render('func');
});

// +++ 페이지
// render(): 뷰페이지 렌더링 -> render(뷰페이지 이름, 데이터(선택))
// send(): 모든타입 데이터 전송(즉 문자열, 배열 ,객체, 숫자 등)
// json(): 객체타입 데이터 전송
// redirect(): 페이지 강제 이동

// 요청과 응답
// ajax
app.get('/ajax', (req, res) => {
    console.log('요청값: ', req.query);
    const { name, email } = req.query;
    // 프론트로 보내는 데이터
    res.send({ result: true, user: `${name}님`, address: `주소: ${email}` });
});

app.post('/ajax', (req, res) => {
    console.log('요청값', req.body);
    const { name, email } = req.body;
    // 프론트로 보내는 데이터
    res.send({ username: name, email });
    // 같은 키랑 값이면 생략 가능
});

// axios
app.get('/axios', (req, res) => {
    console.log('요청값: ', res.query);
    res.send(req.query);
    // 객체 상태이기 때문에 중괄호 안해도됨
});

app.post('/axios', (req, res) => {
    console.log('요청값: ', req.body);
    const { username, email } = req.body;
    const data = {
        name: `안녕함새요 ${username}`,
        address: `주소는 ${email} 입니다.`,
    };
});

app.get('/fetch', (req, res) => {
    console.log('요청 값: ', req.query);
});

app.post('/fetch', (req, res) => {
    console.log('요청 값: ', req.body);
    res.send(req.body);
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
    res.send(req.query);
});
