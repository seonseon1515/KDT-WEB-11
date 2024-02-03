const express = require('express');
const multer = require('multer');
// 파일이름 을 지정하기 위해 내장 모듈: 폴더와 파일의 경로를 쉽게 조작하도록 제공
const path = require('path');
const app = express();
const PORT = 8000;

const profileDetail = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, 'practiceUploads/');
        },
    }),
    filename(req, file, done) {
        const ext = path.extname(file.originalname);
        const newName = 'uploads' + `${data.id}` + '.' + ext;
        done(null, newName);
    },
});

app.set('view engine', 'ejs');
app.use('/practice', express.static(__dirname + '/practiceUploads'));

app.get('/', (req, res) => {
    res.render('practice');
});

app.post('/practice', profileDetail.single('userfile'), (req, res) => {
    console.log('req.body');
    console.log('file: ', req.file);
    console.log('title: ', req.body);
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
