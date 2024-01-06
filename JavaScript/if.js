//조건문
//if 문
/* 조건은 항상 true/false가 와야함.
if(조건){
  조건이 참일 때 실행
} else {
  조건이 거짓일 때 실행
}
*/
if(5>3){
  console.log("큽니다.");
}else{
  console.log("작습니다.");
}

let isShow = true;
let checked = false;
if(isShow){
  console.log('Show!');
}
// if는 무조건와야 하지만 else는 혼자올 수 없음, else는 선택
if(!checked){
  console.log('checked');
}
//거짓일 때만 실행시키고 싶을 때 !(not)연산자를 붙여줌

//if ,else if / else
let name ='임꺽정';
if (name==='홍길동'){
  console.log('홍길동입니다.');
} else if (name==='성춘향'){
  console.log('성춘향입니다.');
}else if(name === '이몽룡'){
  console.log('이몽룡입니다.');
}else{
  console.log('변사또입니다.')
};

// if 중첩
// const myId='abc';
// const MyPw='1234';
// const inPutId = prompt(`id를 입력하세요`);
// const inPutPw = prompt(`비밀번호를 입력하세요`);
// console.log(inPutId, inPutPw);

// if(myId === inPutId){
//   if(MyPw === inPutPw){
// console.log('로그인에 성공했습니다.')
//   } else{console.log(`비밀번호가 틀립니다.`)}
// }else {
//   console.log(`아이디가 틀립니다.`)
// }
// 입력받은 데이터를 메모리에 저장하기 위해 변수에 할당하기
//중복된 데이터는 변수로 나타내면 편함
let age = Number(prompt("나이를 입력하세요"));
let gender = prompt("성별을 입력하세요(남/여)");
if (gender ==='남'){
  ageFunc(age,gender);
  }
 else if(gender ==='여') {
  ageFunc(age,gender);
} else {
  console.log(`성별이 틀렸습니다.`);
}


// 아래 인자는 위에서 선언한 age, gender가 아니래 인자의 이름임 
function ageFunc(age, gender){
  {
    if(age>=20){
     console.log(`성인 $(gender)`);
    } else if (age>=17){
      console.log(`고등 $(gender)`);
    }else if(age >=14){
    console.log(`중등 $(gender)`);
    }else if(age>=8){
      console.log(`초등 $(gender)`);
    }else if(age>=0){
      console.log(`$(gender) 아동`);
    }else{
      console.log(`나이가 틀렸습니다.`)
    }
  }
}

