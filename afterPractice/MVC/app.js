const express = require('express');
const app = express();
const PORT = 8000;

// 미들웨어
app.set('view engine', 'ejs');
app.use(express.json()); // 어떤 것을 json 형태로 받을 것인지?(요청 body)

//라우터
app.get('/', (req, res) => {
    res.render('index');
});


// 404 page
app.get('*', (req, res) => {
    res.status(404).render('404');
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
