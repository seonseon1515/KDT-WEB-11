const express = require('express');
const multer = require('multer'); //npm 설치할 때 버전 신경쓰기
// 파일이름 을 지정하기 위해 내장 모듈: 폴더와 파일의 경로를 쉽게 조작하도록 제공
const path = require('path');
const app = express();
const PORT = 8000;

const profileDetail = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, 'Uploads/');
        },
    }),
    filename(req, file, done) {
        const ext = path.extname(file.originalname);
        const newName = 'uploads' + Date.now() + '.' + ext;
        done(null, newName);
    },
});

// const upload = multer ({profileDetail , limits});

const limits = {
    fileSize: 5 * 1024 * 1024, // 5mb 제한
};

// body-parsor: 데이타를 넣기 위함
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.use('/practice', express.static(__dirname + '/uploads'));

// 페이지
app.get('/', (req, res) => {
    res.render('practice');
});

// 바디파서의 역할?
// 요청 응답 데이터
app.post('/practice', profileDetail.single('userfile'), (req, res) => {
    const { id, pw, username, age } = req.body;
    res.render('result', { file: req.file.path, id, pw, username, age });
    console.log('req.body'); // 데이터가 있어야하므로 바디파서가 있어야 함
    console.log('userfile: ', req.file);
    console.log('title: ', req.body);
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
