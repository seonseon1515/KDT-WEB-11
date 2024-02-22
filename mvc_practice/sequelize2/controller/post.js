const { where } = require('sequelize');
const { Post } = require('../models');
// db.Post(/models에 있는) 변수명을 쓰는 것임

// 전체글 조회
exports.all = async (req, res) => {
    Post.findAll().then((result) => {
        console.log('all', result);
    });

    const result = await Post.findAll({ order: [['id', 'desc']] });
    console.log('all', result);
    res.json({ result: true, data: result });
    // res.data.data....~~
};

// 하나 조회
exports.post = async (req, res) => {
    console.log(req.params.id1212); // 값 일치 -> id1212
    const result = await Post.findOne({ where: { id: req.params.id1212 } });
    res.json({ result: true, data: result });
};

// 하나 생성
exports.write = async (req, res) => {
    const { title, content } = req.body; // 프론트에서 보내주는 값
    const result = await Post.create({ title, content });
    console.log('write', result);
    res.json({ result: true, data: result.id });
    res.json({ result: true });
};

// 하나수정
exports.update = async (req, res) => {
    const { id, title, content } = req.body;
    const result = await Post.update({ title, content }, { where: { id } });
    console.log('update', result);
    res.json({ result: ture });
};

// 하나 삭제
exports.delete = async (req, res) => {
    await Post.destroy({ where: { id: req.body } }), console.log('delete', result);
    res.json({ result: true });
};
