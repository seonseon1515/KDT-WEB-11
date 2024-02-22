const http = require('http');
const express = require('express');
const socketIo = require('socket.io');

const app = express();
const PORT = 8000;

//http서버
const server = http.createServer(app);
//socket서버npm i
const io = socketIo(server);

//미들웨어
app.set('view engine', 'ejs');

//라우터
app.get('/', (req, res) => {
    res.render('client');
});
app.get('/chat', (req, res) => {
    res.render('chat');
});

// 소켓기본 채팅 예제
io.on('connection', (socket) => {
    console.log('조인 전:', socket.rooms);
    // 이벤트를 받는 쪽
    socket.on('join', (res) => {
        // 채팅방을 생성하는 방법 중 하나는  join (방아이디) 사용. 방이 존재하면 그 방으로 접속하게 됨
        socket.join(res);
        socket.chatRoom = res; // 객체 생성(socket에 chatroom이 생기고 값은 res)
        console.log('조인 후', socket.rooms);
        //broadcast: 나(현재 브라우저)를 제외한 전체 사용자 브라우저에게 메세지 전달
        socket.broadcast.to(res).emit('create', '새로운 브라우저 입장');
    });

    socket.on('message',(res)=>{
        //io.to(특정방아이디).emit(이벤트) : 특정방의 전체 사용자에게 메세지 전달
        // socket: 브라우저 하나
        // 프론트에서 받은 값을 소켓 서버 전체에서 chatRoom에 해당하는 곳에서만 'chat'이라는 이벤트를 발생
        io.to(socket.chatRoom).emit('chat',res)
    })

});

// 소켓기본예제
// io.on('connection', (socket) => {
//     console.log('조인 전', socket);
//     socket.on('open_message', (arg, arg2, arg3, cb) => {
//         console.log('arg', arg, arg2, arg3);
//         cb(arg, arg2, arg3);
//     });
//     socket.on('form_message', (arg) => {
//         console.log(arg);
//         socket.emit('backend_message', arg);
//     });
// });

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
