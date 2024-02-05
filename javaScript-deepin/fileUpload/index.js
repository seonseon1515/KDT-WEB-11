const express = require('express');
const multer = require('multer');
// 파일이름 을 지정하기 위해 내장 모듈: 폴더와 파일의 경로를 쉽게 조작하도록 제공
const path = require('path');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');

// 정적파일설정
// 페이지 만드는 것? 왜 이과정이 필요한지? 경로설정을 위해?
// http://localhost:8000/uploads/파일명
app.use('/uploads', express.static(__dirname + '/uploads'));

// multer 설정(단순설정)
const upload = multer({
    // dest: 업로드할 파일을 저장할 폴더 지정
    dest: 'uploads/',
});

//===========================================================multer 세부설정
const uplaodDetail = multer({
    // storage(객체): 저장할 공간에 대한 정보
    // diskStorage: 파일을 저장하기 위한 모든 제어기능 제공(파일 저장관련 설정)
    storage: multer.diskStorage({
        // destination: 업로드할 파일을 저장할 폴더를 지정
        destination(req, file, done) {
            // 에러처리 null
            // uplaods 폴더에 파일 저장!!
            done(null, 'uploads/');
        },
        // filename(요청 객체, 업로드된 파일 객체, 콜백함수): desniamtion과 매개변수 동일. 파일 이름을 결정
        filename(req, file, done) {
            //extname(): 확장자를 추출
            const ext = path.extname(file.originalname);
            // basename(): 파일 이름을 추출(파일의 오리지날명, 확장자) => 확장자를 제외해서 파일이름만 추출
            const newName = path.basename(file.originalname, ext) + Date.now() + ext;
            done(null, newName);
        },
    }),
    // limits: 파일 저장 용량 제한(옵션)
    // const limits: { fileSize: 5 * 1024 * 1024 }, //5mb(메가바이트)제한
});

// 페이지 router
app.get('/', (req, res) => {
    res.render('index');
});

// 요청, 응답, 페이지
app.post('/upload', uplaodDetail.single('userfile'), (req, res) => {
    console.log('req.body');
    console.log('file: ', req.file);
    console.log('title: ', req.body);
});

//멀티(ver1): array('userfile',3) -> 최대 세개까지 올릴 수 있음
app.post('/upload/array', uplaodDetail.array('userfiles'), (req, res) => {
    console.log('files', req.files);
    console.log('title', req.body);
});

// 멀티(ver2): fields(객체(name) 배열) -> name으로 키값 고정됨
app.post('/upload/fields', uplaodDetail.fields([{ name: 'userfile1' }, { name: 'userfile2' }]), (req, res) => {
    console.log('files', req.files);
    console.log('title', req.body);
});

app.post('/upload/axios', uplaodDetail.single('userfile'), (req, res) => {
    res.send({ file: req.file, title: req.body });
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
