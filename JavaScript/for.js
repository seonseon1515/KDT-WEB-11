// // 반복문
// // for 문
// /* for (초기값 ; 조건식; 증감식){
//       반복코드}
// */

// //step 1. 0부터 5까지 1씩 증가
// // let i =0;
// for(let i =0; i <6;i++){
//   console.log(i);
// }

// // step2. 5부터 0까지 1씩 감소
// for(let i= 5; i>=0; i--){
//   console.log(i)
// }

// //step 3. 1부터 10까지 중에서 짝수 출력
// //sol1. 반복문과 조건문 활용
// for(let i=1; i<=10; i++){
//     if(i%2==0)
//     {console.log(i)};
// }
// //sol2. 증감값을 변경
// for(let i = 2; i<=10; i=+2){
//   console.log(i);
// }

// //step 4. 배열과 함께
// const colors = ['red', 'orange','yellow','green','blue','navy','purple'];
// for(int i=0; i<colors.length; i++){
//   console.log(`무지개 ${i+1}번째 색상은 ${colors[i]}입니다.`);
// }
//13의 배수 
// let i =Number(prompt(`숫자를 입력하세요!`)) 
// for( let n=1;n<=i;n++){
//   i===(2*n*13) ? console.log(`${i}는 13의 배수가 아니거나 13의 배수이면서 짝수입니다.`):console.log(`${i}는 13의 배수이면서 홀수입니다.`)}

//실습7
// const inputNum = Number(prompt('숫자 입력하세요'));
// for (let i = 0; i <= inputNum; i++) {
//     if (i % 13 == 0 && i % 2 == 1) {
//         console.log(i);
//     }
// }
// }

//실습코드 작성하기

//이중 for문
//for문에 또 for문
/* for(){
  for(){
  }
} 
*/

// for(let dan =2; dan<=9; dan++){
//   for(let i=1 ; i<10 ; i++){
//   console.log(`${dan} X ${i}  = ${dan * i}` )
// }}