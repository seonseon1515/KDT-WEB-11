let numbers = [1,2,3,4,5,6];
let colors = ["빨", "주", "노", "초 ", "파", "남", "보"];

// 기본 for문
for(let i = 0 ; i<numbers.length ; i++){
  console.log(numbers[i]);
}

for(let i =0 ; i<colors.length; i ++){
  console.log(colors[i]);
}

// for of문
// 괄호 안 변수 선언은 블록 안에서 사용할 변수 of 배열명
for(let number of numbers){
  console.log(number);
}

for(let color of colors){
  console.log(color);
}

// [].forEach()문
// 배열명.forEach( {}안에서 사용할 변수, 인덱스, 배열{} )

numbers.forEach(function(number){console.log(number)})

numbers.forEach((number, idx, arr)=>{console.log(number, idx, arr)})


colors.forEach(function(color,i){
  console.log(color, i)
})

colors.forEach((color, i)=>{console.log(color, i)})

// for in문
let colors2=[{color:'red'},{color:'blue'},{color:'yellow'}];
// 보통 객체(키:value)에서 주로 사용
//for({}안에 사용할 indexr값 of 배열)
for(let index in colors2){
  console.log(colors2[index]);
  console.log(index);
}
for(let index in colors2){
  console.log(colors2[index].color)
}

//do-while문
// 적어도 한번은 실행됨
let i = 0 ; 
do{
  console.log(colors2[i]);
  i++
}while(i<colors2.length)


let arr;
//filter() 조건에 부합하는 배열 요소만 !반환!

// arr = numbers.filter(function(중괄호 안에서 사용할 변수){조건식이 나오는 것이 일반적})

// 필터해서 새로운 변수에 담아서 출력하는 과정
arr = numbers.filter((number)=>{
return number >3;
});
console.log(arr);

let arr2;
arr2 = colors.filter((color)=>color.length>2
)
console.log(arr2);



// 배열 안에 있는 값을 더할 때는 그 더한 값의 합은 전역변수로 선언



//실습: 배열의 합
let sum=0;
let iArr= []; 
 for(let i =0; i<=100; i++){
  iArr.push(i)
};

for(let i =0; i<=100; i++){
  sum+=iArr[i];
}
console.log(sum);

for(let i of iArr){
  sum+=iArr;
}
console.log(sum);

iArr.forEach((i)=>{sum+=iArr})
console.log(sum);

// 실습2

let fruits1 = ["사과","딸기", "파인애플","수박","참외","오렌지","자두","망고"]
let fruits2=["수박", "사과","참외","오렌지","파인애플","망고"]

// 방법 1
let same = [];
let diff = [];


same = fruits1.forEach((fruits)=>{
  if(fruits2.includes(fruits)){
    same.push(fruits);
  }
})

fruits1.forEach((fruits)=>{
  if(!fruits2.includes(fruits)){
    diff.push(fruits);
  }
})

// 방법2 
let same2 = fruits1.filter((fruit)=>fruits2.includes(fruit))

let diff2 = fruits1.filter((fruit)=>!fruits2.includes(fruit));

