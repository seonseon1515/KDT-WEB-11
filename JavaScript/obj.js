// 1970sus 1월 1일 0시를 기준으로 시작 (UTC+9)
console.log(new Date(2024,1));

const date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth()+1);

console.log(date.getDate()); //현재 일자
console.log(date.getDay());
//요일(0,7은 일요일) 
console.log(date.getTime()); //타임스탬프값 ,시간이 지남에 따라 계속 바뀜
console.log(date.getHours());

console.log(date.getMinutes());

console.log(date.getSeconds());

console.log(date.getMilliseconds());

console.log(`${date.getFullYear()}년 ${date.getMonth()}월 ${date.getHours()}일 ${date.getHours()}:${date.getMinutes()}`);

//Math
console.log(Math.PI);
console.log(Math.E);
console.log(Math.min(1,2,3));
console.log(Math.max(3,2,1));
console.log(Math.random());
//0부터 1사이의 난수를 표현

console.log(Math.round(1.4));
//반올림
console.log(Math.floor(1.4));//버림
console.log(Math.ceil(1.4));//올림

console.log(Math.abs(3-5));

console.log(Math.cbrt(2))// 세제곱근을 반환