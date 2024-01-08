let str = `happy day~!  `; //13
console.log(str.length);
console.log(str.toUpperCase()); // 전부 대문자
console.log(str.toLowerCase());// 전부 소문자

//toUpperCase(), toLowercase()는 보통 회원 가입시 중복을 막기 위해 자주 사용

console.log(str.indexOf('y'));
//몇 번째 인덱스인지 확인, 단 중복 문자가 있을 경우 순서상 먼저 있는 문자만 검색

console.log(str.slice(2));
//앞 순서부터 글자의 길이 2만큼 자름
console.log(str.slice(2,5));
// ???? 앞 순서부터 글자의 길이 2 /  음수면 뒤에서 부터 글자의 길이 5만큼 자름

console.log(str.replace('a','s'));
// 문자열 변경. 제일 먼저 나온 a만 바뀜
console.log(str.replaceAll('y','i'));
// 전체 문자 변경

console.log(str.repeat(5)); //문자열 반복

console.log(str.trim().length);
// 문자열 양끝 공백 없앰

console.log(str.split('y'));
// y를 기준으로 문자열을 나눔(y는 사라짐)

const colors = ['red' , 'orange' , 'yellow'];
console.log(colors.join('-'));
// join() 아에 있는 문자를 기준으로 병합시킨다. 

console.log(str.trim().toLowerCase().split('p'));

let hello = "Hello~"
let helloSplit = hello.split("");
console.log(helloSplit);

let reverseHello = helloSplit.reverse();
console.log(reverseHello);

let helloJoin = reverseHello.join('');
console.log(helloJoin);

console.log(hello.split('').reverse().join(''));
// 메소드 체이닝(메소드를 사용할 때 간편해짐)

