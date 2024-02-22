const commentsModel = require('../model/comment')

// ------------------------------------- 방법 1

// exports.main = (req, res) => {
//     res.render('index');
// };

// exports.comments = (req, res) => {
//     res.render('comments', { list: comments });
// };

// exports.comment = (req, res) => {
//     console.log(req.params);
//     console.log(typeof req.params.page);
//     const page = Number(req.params.page);
//     res.render('comment', { data: comments[page - 1] });
// };

// ------------------------------------ 방법 2 (화살표 함수)
const main = (req, res) => {
    res.render('index');
};

const comments = (req, res) => {
    res.render('comments', { list: comments });
};

const comment = (req, res) => {
    console.log(req.params);
    console.log(typeof req.params.page);
    const page = Number(req.params.page);
    res.render('comment', { data: comments[page - 1] });
};

module.exprots = { main, comment, comments };
