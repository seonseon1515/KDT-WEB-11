const { Member, Profile } = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt'); // 비밀번호를 암호화를 시키면서 가입을 시키기 위해
require('dotenv').config();

//회원가입
exports.signup = async (req, res) => {
    const { userId, pw, username, age, email } = req.body;
    //존재여부확인
    const find = await Member.findOne({ where: { userId } });
    console.log('find', find);

    if (find) {
        res.json({ result: false, message: '이미존재하는 회원' });
    } else {
        const password =await bcrypt.hash(pw,11)
        //생성 create
        const result = await Member.create({ userId, password});
        console.log('signup', result);
        const result2 = await Profile.create({ username, age, email, memberId: result.id });
        console.log('profile', result2);
        res.json({ result: true });
    }
};
//로그인: jwt(사용하기)
exports.login = async (req, res) => {
    const { userId, pw } = req.body;
    const password = await bcrypt.compare(pw, result.password)
    //검색 findOne
    const result = await Member.findOne({ where: { userId} }); // 사용자 찾기

    console.log('login', result);
    if (result) {
        if(password){
        // jwt 토큰 발행
        const token = jwt.sign({ id: result.id }, process.env.SECRET, { expiresIn: '1h' }); //옵션: 한 시간 동안 유효(), 포스트만으로 확인 가능
        res.json({ result: true, data: result }, token);
        } else{res.json({success:false, message:'비밀번호가 틀립니다.'})}
    } else {
        res.json({ result: false });
    }
};
//회원조회 
exports.find = async (req, res) => {
    const { id } = req.user; //athorization -> Bearer token - 겟 방식 포스트맨에서 토큰 값 복붙해서 send 했을 때 req.user값(id)이 나오는지 확인)
    //findByPk
    //const find = await Member.findOne({ where: { id } });
    const result = await Member.findByPk(id, {
        attributes: ['userId', 'password'],
        include: [{ model: Profile, attributes: ['username', 'age', 'email'] }],
    });
    console.log('result', result);
    res.json({ result: true, data: result });
};
//정보수정
exports.update = async (req, res) => {
    const { pw } = req.body;
    const {id} = req.user //auth 미들웨어에서 보내주는 값
    const result = await Member.update({ password: pw }, { where: { id } });
    console.log('update', result);
    await Profile.uadate({username,age,email},{where:{memberId:id}})
    res.json({ result: true });
};
//회원탈퇴
exports.delete = async (req, res) => {
    const { id } = req.user;
    const result = await Member.destroy({ where: { id } });
    console.log('delete', result);
    res.json({ result: true });
};
