//반복문
//while문
/*
while(조건문){
  반복할 코드
}
주의사항: 조건문에 탈출 조건이 있어야 하거나 혹은 조건문에 탈출조건이 없으면 break를 넣어줘야 함 
 */

//step 1. 1부터 5까지 1씩 증가-> 조건식에 탈출 조건이 있었음
let step1 = 1;
while(step1<=5){
  console.log(step1);
  step1++
}

//step 2. 9부터 4까지 1씩 감소
let step2 = 9;
while(step2>=4){
  console.log(step2);
  step2--;
}

//step 3. 1부터 10까지 홀수 출력
let step3 = 1; 
while(step3<=10){
  if(step3%2===1)
  console.log(step3);
step3++;
}

// step 4. break 사용
let step4 =0;
while(true){
  console.log(step4);
  step4++
  if (step4=10){
    break;
  }
}

