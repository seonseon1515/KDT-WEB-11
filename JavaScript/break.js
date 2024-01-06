// // 반복문 제어 
// //berak: 멈추고 빠져나옴
// for(let i =0; i<100 ; i ++){
//   if(i=11){
//     console.log('끝');
//     break;
//   }
//   console.log(i);
// }

// let sum=0; //전역변수
// for(let i=0; i<=100; i++){

//   console.log(sum);
//   if(i%2===0){
//     continue;
//   }
//   console.log(sum);
// }
// continue: 멈추고 다음 반복을 시행

let sum = 0; 
let num = 50;
for(let i=0 ; i<num ; i++){
  if((i%2!==0)&&(i%3!==0)){
    continue;
  }
  sum =+ i;
}
console.log(sum);
