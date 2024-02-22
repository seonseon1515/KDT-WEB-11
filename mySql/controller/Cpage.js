// 페이지 여는 코드

exports.main = (req, res) => {
    res.render('index');
};

exports.pageVisitor = (req, res) => {
    res.render('visitor');
};
