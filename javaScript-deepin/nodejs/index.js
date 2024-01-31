// const connect = require('./module.js');
// console.log(connect);

// const { a, b, c } = require('./module.js');
// //require -> 외부로 보낸 모듈을 가져오는 명령어(사용 시 .js 생략해도 됨)

// console.log(connect.a);
// console.log(a);

// http 모듈을 가져오는 방법, 보통 변수에 담음
const http = require('http');
const fs = require('fs');
// req, res 둘다 매개인자로 작성해야됨
const server = http.createServer(function (req, res) {
    // res.writeHead(200);
    // res.write('<h1>Hello node.js</h1>');
    // res.end('<p>End</p>');

    // 파일 전송
    try {
        const data = fs.readFileSync('./index.html');
        res.writeHead(200);
        res.end(data);
    } catch (error) {
        console.log(error);
        res.writeHead(404);
        res.end(error.message);
    }
});

// // 요청할 때 들어오는 이벤트
// server.on('request', function () {
//     console.log('요청 이벤트');
// });

// server.on('connection', function () {
//     console.log('접속 이벤트');
// });

//listen: 서버를 실행
server.listen(8000, function () {
    console.log('8000번 포트 실행');
});

