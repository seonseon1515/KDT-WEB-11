//객체는 여러가지 데이터가 하나로 묶여있는 형태

let cat={
  // key : value 형태
  name: "고양이",
  age:2,
  isCute: true,
  mew: function(){
    return "애옹애옹애옹!"
  }
}

console.log(cat.name);
console.log(cat.age);
console.log(cat.isCute);
console.log(cat.mew());

let people= {
  name:"홍길동",
  gender:"남",
  address:"서울시 마포구",
  phone:"010-1234-5678"
}

console.log(people);
console.log(people.name);
console.log(people.gender);

let introduce={
  name:"나선경",
  age:26,
  mbti:"ENFP",
  bloodType:"B형",
  address:"서울시 관악구",
  birthDay:1015
}
console.log(introduce.name);
console.log(introduce.age);
console.log(introduce.mbti);
console.log(introduce.bloodType);
console.log(introduce.address);
console.log(introduce.birthDay);

// typeOf: 데이터의 타입을 알려줌

console.log(typeof "hello");
console.log(typeof true);

const types= 20;
console.log(typeof types);

let n = 8;
let s = "뭐야"
let o =  {
  name: "선경이지 뭐야"}

console.log(typeof n+ " isn't "+ typeof s+" data type.")
console.log("Typeof 를 boolean이나 null에 사용하면, "+typeof o +" 결과를 얻을 수 있습니다.")

//null은 object 타입임


//형변환: data의 타입을 변환시켜 주는 것 
//prompt: 사용자에게 데이터를 입력받게 하는 것
// let mathScore = prompt(`수학 점수를 입력하세요`)
// let engScore = prompt(`영어 점수를 입력하세요`)
// let avg=(Number(mathScore) +Number(engScore))/2;
// console.log(avg);

// 문자 형변환
let num = 123;
console.log(typeof num);

let a = String(num);
console.log(typeof a);

// toString()은 null과 undefined에서 사용 불가
let b = num.toString();
console.log(typeof b);

console.log(Number("1234"));
console.log(Number("sdlfjsdklf"));

let mathScore ="77"
let engScore = "88"
let avgScore =(Number(mathScore)+Number(engScore))/2;
console.log(avgScore);

// 연산자
console.log(1+1);
console.log(1-1);
console.log(1*1);
console.log(4/2);
console.log(100%2);
console.log(99%2);
console.log(2**9);

const num3=+15;
console.log(num3);

let result, result2;
let nums=10, nums2=15;

//nums++은 다음줄 부터 1 더해줌 처음엔 본래 값 그대로 할당됨
result=nums++; //10
result= nums++;//11
console.log(result);

// 1이 더해진 수가 할당됨.
result2 = ++nums2 //16
result2 = ++nums2 //17
console.log(result2);

let c = 123
let d = "123"
console.log(d==c); //t
console.log(c=!d) //f
console.log(c===d); //f
console.log(c==!d); //t

//논리 연산자
let name = `뽀로로`;
let age = `16`;
let isAdult =age>19
if(name === `뽀로로`|| age>19){
  console.log(`통과`)
}else{
  console.log(`돌아가`)
}

if(!isAdult){
  console.log(`통과`)
}else(isAdult)
{
 console.log(`돌아가`)
}
//|| or 연산자는 둘중 하나만 조건이 일치해도 통과
//&& and 연산자는 두개 모두 조건이 일치해야 통과
// not 연산자는 반대


