// alert("링크 방식")
//var
// var name="홍길동";

// var naem="나비";

// var age;

// // 값이 할당되지 않을 때는 undefined가 할당
// console.log(age);
// console.log(name);

// age=20; //값을 할당 가능
// console.log(name);

// age=10; //재할당 가능

// console.log(age);




//let
// let name= "홍길동";
// // 중복 선언 불가
// console.log(name);
// name="성춘향";
// console.log(name);
// // 재할당 가능
// // let age;
// // //값 할당하지 않을 시 undefined

// //*const
// const age=20;
// // 값을 할당할 수 없음
// // 변수명 대소문자 구분
// const AGE=20;


//데이터 타입
//String
let myName = "홍길동";
var email = 'gildong@naver.com';
let city = '서울';
console.log(myName,email,city);
console.log("안녕하세요 "+myName,"입니다.");
//+로 쓰면 띄어쓰기를 제어할 수 있음 ,로 쓰면 띄어쓰기 제어불가
//빈 공백도 문자기 때문에 문자처리가 됨
console.log(`안녕하세요 ${myName}입니다.`)

//Number
let number=12.3;
console.log(number);

//Boolean
const checked= true;
const isShow=false;
console.log(checked, isShow);

//undefined : 미할당 데이터
let noData;
console.log(noData);

//의도적으로 비어 있음을 의미할 때 사용
let empty=null;
console.log(empty);

let colors=['red', 'orange', 'yellow', 'green'];
console.log(colors[0]);
// 배열의 길이
console.log(colors.length);
colors.push('blue');
//배열 추가
console.log(colors);

console.log(colors.length, colors);

// 배열추가
colors.unshift("navy");

colors.pop();

colors.shift();

console.log(colors);

console.log(colors.indexOf("orange"));
// 없는 값을 물어봤을 경우 -1이 나옴

console.log(colors.includes("green"));
// 값 존재 유무 (없을 때는 false)

console.log(colors.reverse())
//배열 값의 순서를 반전시킨 값으로 적용