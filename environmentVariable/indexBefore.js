require('dotenv').config();

const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');

//임시 db
const comments = [
    {
        id: 1,
        userid: 'hello',
        date: '2024-02-01',
        comment: '안뇽안뇽하이11',
    },
    {
        id: 2,
        userid: 'hello2',
        date: '2024-03-01',
        comment: '안뇽안뇽하이22',
    },
    {
        id: 3,
        userid: 'hello3',
        date: '2024-04-01',
        comment: '안뇽안뇽하이33',
    },
    {
        id: 4,
        userid: 'hello4',
        date: '2024-05-01',
        comment: '안뇽안뇽하이44',
    },
];
// 키 값은 다똑같아야 함

// 데이터 출력시켜주기
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/comments', (req, res) => {
    res.render('comments', { list: comments });
});

app.get('/comment/:page', (req, res) => {
    console.log(req.params); //:있을 때는 바뀌는 값이 들어가는 것, 객체가 되는 것? 
    // 왜 params인지?
    // 왜 req인지???
    // : page는 {page: "값"} 형태, : 안붙으면 경로 이름이 됨
    console.log(typeof req.params.page);
    const page = Number(req.params.page);
    // comments: 배열의 요소에 접근(0부터 접근 위해 -1) 즉 객체 하나
    res.render('comment', { data: comments[page - 1] });

    // 값이 들어왔는지 확인하기 위한 코드(parameter방식임)
});

app.listen(PORT, () => {
    console.log(`http:/localhost:${PORT}`);
});

// app.get('/', (req, res) => {
//     console.log('hi');
//     console.log(process.env);
//     console.log(process.env.NAME);
//     console.log(process.env.NODE_ENV);
//     //   if (pro  cess.env.NODE_ENV==="production")
//     // {console.log('라이브 서버입니다.');
//     //   }else if (process.env.NODE_ENV ==='dev'){
//     //     console.log('개발용 서버입니다.');
//     //   }
// });
