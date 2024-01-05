// function sayHello(){
//   console.log("지역 Hello");
// }

// console.log("전역 Hello");
// sayHello();

//덧셈기능이 있는 함수
const num1= 10; //전역 변수

function sumFunc(num2, num3){ //num2, num3는 매개변수
  const num1=11;
  const sum = num1+num2+num3;
  //console.log("지역",num1);
  console.log("결과", sum);
  //return은 함수 제일 마지막에 사용, 값을 다시 전달할 때 사용
  return sum;
}
sumFunc(10,20); // 호이스팅
//변수의 값을 출력할 때 자기 지역에서 먼저 찾고 그 위의 부모 범위에서 찾음

// console.log("전역" ,num1);
let result3 = sumFunc(50 ,10); //50 ,10은 인자
console.log(result3);


// sayHello(); 호이스팅 불가
// 함수 표현식
// let sayHello = function(){
//   console.log("hello")
// }
// sayHello(); 

let sayHello = (num5)=>{
  console.log("hello")
  return num5+10;
}
sayHello(); 
let result4 = sayHello(40);
console.log(result4);

