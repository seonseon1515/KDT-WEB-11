const jwt = require('jsonwebtoken');
exports.auth = (req, res, next) => {
    const headers = req.headers.authorization;
    //req.headers['authorization']
    const [, token] = header.split(' ');
};

// 401: 미인증
if (token === null) {
    return res.status(401).json({ success: false });
    // 토큰이 없을 때 오류
}
const [_, token] = header.split(' ');
//프론트에서 헤더에 담아서 값을 담아서 보내줌

// jwt 인증 (토큰 발행, 프론트에서 쓸 때마다 보내준다?)
// 쿠키: 오늘 하루 팝업창 안보이기에 쓰임 (실무에선 jwt 많이 씀, 세션,쿠키 사용하는 곳도 있음/ 회사에 따라)
jwt.verify(token, process.env.SECRET, (err, decode) => {
    if (err) {
        return res.status(403).json({ success: false });
    }
    // 바로 넘겨주면 안되고 미들웨어를 통해 넘겨줘야하는 이유?
    req.user = decode; // 다음 미들웨어로 전달하는 값
    next();
});
