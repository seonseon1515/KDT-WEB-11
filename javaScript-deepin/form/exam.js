const express = require('express');
const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('examIndex');
});

app.get('/getPage', (req, res) => {
    res.render('exam'); //단순페이지 열기
});

app.get('/skGetForm', (req, res) => {
    console.log('req.query');
    //객체 구조 분해 할당
    const { username, gender, birthYear, birthMonth, birthDay, hobby } = req.query;
    //데이터 정보 전달받기
    res.render('result', {
        title: 'GET 전송',
        userInfo: {
            username,
            gender,
            birthYear,
            birthMonth,
            birthDay,
            hobby,
            color: { result: false, color: null },
            number: { result: false, number: null },
        },
    });
});

app.get('/postPage', (req, res) => {
    res.render('examPost'); //단순페이지 열기
});

app.post('/skPost', (req, res) => {
    console.log('req.body');
    const { username, gender, birthYear, birthMonth, birthDay, hobby, color, number } = req.body;
    //데이터 정보 전달받기
    res.render('result', {
        title: 'POST 전송',
        userInfo: {
            username,
            gender,
            birthYear,
            birthMonth,
            birthDay,
            hobby,
            //key-value형태에서 key값과 value의 변수가 동일할때는 하나로 합치기가능
            color: { result: true, color: color },
            number: { result: true, number: number },
        },
    });
});

// app.use('*', (req, res) => {
//     res.render('404');
// });

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
