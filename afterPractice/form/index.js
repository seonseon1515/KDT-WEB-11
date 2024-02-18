const express = require('express');
const app = express();
const PORT = 8000;

// 내장 객체(바디파서) 굳이 왜 썼을까?
// 안 쓰는 경우는 어떤 경우일까?
//app.use(express.urlencoded({ extended: ture }));
app.use(express.json());

// 이 코드의 의미
// 대전제를 찾고 그 대전제를 중심,기준으로 사소한 의문들을 풀어나가는 것이 사사로운 궁금증들 각각을 해결하려고 시간들이는 것보다 효율적일 듯
// 핵심 개념 혹은 대전제를 찾을 수 있는 방법 고민하기
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
    console.log(req.query);
    res.render('index');
    // res.send('안뇽! 루트페이지 짠!');
    // res.send와 res.render 둘 다 할 수는 없음! 둘 중에 하나만 가능
});

// 렌더링 하는 ejs 파일 이름이 곧 페이지 경로의 이름과 같지 않음 기억
// 페이지 경로에 이름을 부여하는 것 뿐!
app.get('/getform', (req, res) => {
    console.log(req.query);
    res.render('index');
    console.log('폼 결과: ', req.query);
    console.log('userInfo: ', userInfo);
});

//userInfo 객체를 어디서 정의하지???????

app.post('/postform', (req, res) => {
    console.log(req.body);
    res.render('index');
    console.log('폼 결과: ', req.body);
    console.log('data: ', data);
});

// post 페이지에서 req.body 값을 불러오지 못하는 이유?

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
