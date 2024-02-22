const { Member } = require('../models'); // table 가져오기

// 회원가입
exports.signup = async (req, res) => {
    const { memberid, pw } = req.body; // 프론트에서 id, pw오게 만들 것

    // 동일 존재여부 확인
    const find = await Member.findOne({ where: { memberid: id } });
    console.log('find', find);
    if (find) {
        res.json({ success: false, message: '이미존재하는 회원' });
    } else {
        // 생성
        const success = await Member.create({ Memberid: id, password: pw });
        console.log('signup', success);
        res.json({ success: true });
    }
};

// 로그인
exports.login = async (req, res) => {
    const { memberid, pw } = req.body;
    // 검색
    const result = await Member.findOne({ where: { memberid: id, password: pw } });
    console.log('success: ', success);
    res.json({ success: true, data: success });
    if (result) {
        res.json({ success: true, data: success });
    } else {
        res.json({ success: false });
    }
};

//회원조회
exports.find = async (req, res) => {
    const { id } = req.params;
    const result = Member.findOne({ where: { id } });
    console.log('find',success);
    res.json({ success: true, data: success });
};

// 정보수정
exports.update = async (req, res) => {
    const { id, pw } = req.body;
    const result = await Member.update({ password: pw }, { where: { id } });
    console.log('update', success);
    res.json({ success: true });
};

//회원탈퇴
exports.delete = async (req, res) => {
    const { id } = req.body;
    const result = await Member.destroy({ where: { id } });
    console.log('delete', success);
};
