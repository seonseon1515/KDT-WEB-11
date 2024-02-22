const express = require('express');
const http = require('http');
const app = express();
const PORT = 8000;
const ws = require('ws');
//
// http 서버
const server = http.createServer(app);
// 웹 소켓 서버연결    
const wss = new ws.Server({ server: server });

// 미들웨어
app.set('view engine', 'ejs');

// 라우터
app.get('/', (req, res) => {
    res.render('client');
});

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

// 웹소켓
// 브라우저 (클라이언트)들을 담을 배열 변수
const sockets = [];
wss.on('connection', (socket) => {
    // socket변수는 접속한 브라우저
    console.log(wss.clients);
    console.log('클라이언트가 연결되었습니다.');

    // 메세지 이벤트
    socket.on('message', (message) => {
        // 웹소켓을 통해 클라이언트와 서버간의 데이터를 주고받을때는 일반적으로 문자열 또는 버퍼형태로 전달됨.
        // 버퍼를 쓰는 이유: 서버가 모두 다른 환경이기 때문에 객체를 전달할 때는 객체를 일련의 바이트로 변환하는 직렬화 과정이 필요
        const msg = JSON.parse(message);
        console.log(msg);
        console.log('클라이언트에서 받은 메세지: ', msg.message);
        socket.send(`서버메세지: ${msg.message}`);
        wss.clients.forEach(value=>{
          value.send(`${msg.user}: ${msg.message}`)
        });
    });

    // 오류이벤ㅌ
    socket.on('error', (err) => {
        console.log(`error 발생`, err);
    });

    // 접속 죵로
    socket.on('close', () => {
        console.log('클라이언트와 연결 종료');
    });
});
