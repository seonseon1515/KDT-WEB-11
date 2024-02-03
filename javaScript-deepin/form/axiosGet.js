const express = require('express');
const app = express();
const PORT = 8000;

// body-parsor
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', './views');

// page 만들기
app.get('/', (req, res) => {
    res.render('axiosGet');
});

app.get('/axiosGet', (req, res) => {
    res.render('axiosGet');
    console.log('요청값: ', res.query);
    res.send(req.query);
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
