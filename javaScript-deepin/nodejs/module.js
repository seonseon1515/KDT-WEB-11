// // 하나의 모듈 파일에 하나의 모듈 만들기
// const a = 10;
// const b = 20;

// function connect() {
//     return a + b;
// }

// // 함수를 외부에서 사용할 수 있도록 해줌
// module.exports = connect;

// 하나의 모듈 파일에 여러개 모듈 만들기
const a = 'a 변수';
const b = 'b 변수';
const c = 20;


// 여러 변수를 외부에서 사용할 수 있도록 - 객체에 담는 표현식 사용
module.exports = {a, b, c}