//조건문
//switch문
/*
switch(변수){
  case 값1: // x===값1
    break;
  case 값2: // x===값2
    break;
  default:(선택이지만 쓰는 걸 권장)
    break;
}

break: 조건문, 반복문에서 빠져나갈 때 사용하는 키워드 
*/

// let a = 2 * 2;
// switch(a){
//   case 3:
//     console.log('현재 값은 3입니다.');
//     break;
//   case 4:
//     console.log(`현재 값은 ${a}입니다.`);
//     break;
//   case 5:
//     console.log(`현재 값은 5입니다.`);
//     break;
//   default:
//     console.log(`알 수 없는 값 입니다.`);
//     break;
// }
// // break 를 쓰지 않으면 다 시행됨(값이 일치하는 문장 부터 아래에 있는 문장들까지)

// let grade = 'A'
// switch(grade){
//   case 'A':
//     console.log(`학점 A`);
//     break;
//   case 'B':
//     console.log(`학점 B`);
//     break;
//   case 'C':
//     console.log(`학점 C`);
//     break;
//   case 'D':
//     console.log(`학점 D`);
//     break;
//   default:
//     console.log(`알 수 없는 값입니다. `);
//     break; // 마지막엔 브레이크 안 써도 되긴 함
// }

// // 삼항 연산자
// let myId = 'abc';
// const inputId = prompt(`ID를 입력하세요`);
// myId === inputId ? console.log(`존재하는 아이디`): console.log(`아이디가 틀립니다.`);

//삼항 연산자 중첩

// let myId = 'abc';
// let myPw = '1234';
// const inputId = prompt(`ID를 입력하세요`);
// const inputPw = prompt(`PW를 입력하세요`);

// myId === inputId ?
//    myPw===inputPw ? console.log(`로그인에 성공하였습니다.`): console.log(`비밀번호가 틀렸습니다.`) // 처음 조건이 참일 때 시행
// :console.log(`아이디가 틀립니다.`);
// // 처음 조건이 거짓일 때 시행

// let a = 'a';
// let b = 'b';
// let fc = (num1, num2) => {
//     alert(num1 * num2);
// };

// a === b ? fc(4, 5) : fc(3458, 3454);

let now = new Date().getHours();

now <=11 ? console.log(`오전입니다`): console.log(`오후입니다!`)