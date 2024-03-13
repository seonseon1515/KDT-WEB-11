import { useState } from 'react';

const SayFunction = () => {
  // 배열 비구조화 할당
  const [message, setMessage] = useState('welcome!'); // 우측값 실행 결과값을 왼쪽에 할당하겠다는 의미
  console.log(useState('welcome!')); //['welcome!', ƒ]
  // 'welcome' : message 변수의 초기값으로 들어감
  // useState(초기값) -> 숫자, 문자, 배열 등등 자유롭게 넣을 수 있음
  // ƒ : setMessage() - message state 값을 바꾸는 함수의 이름
  // 각 state 마다 state값을 변경하는 함수를 따로 만들어 줌.

  const onClickEnter = () => {
    setMessage('안녕함세요!'); // 메세지가 문자열이기 때문에 문자열을 넣어준 것
  };

  const onClickLeave = (e) => {
    console.log(e.target);
    setMessage('안녕히가세요~');
  };

  const alertMsg = (e, msg) => {
    console.log(e.target);
    //이벤트 타겟
    alert(`${msg}`);
  };
  return (
    <div>
      <h1>{message}</h1>
      {/* onClickEnter() -> 리액트에서는 괄호 붙이면 너무 많은 리렌더링 에러!(html에서는 onclick="onClickleave()" -> 문자열 형식으로 호출문 등록(클릭 시 함수 실행되게 끔))
      (js: addEventListener('click', onClickEnter) -> 괄호없이 함수를 바로 실행하지 않고 클릭이 발생했을 때 함수가 호출되도록 )
      함수는 괄호없이 명만 정확하게 써서 사용 / js 에서 함수 바로 실행 위해 괄호를 붙여줬었나??? 그냥 온클릭함수 뒤에 () 붙여줬던 것 같은데..
      react: onClick = {onClickLeave} -> 괄호 x 함수 바로 실행 안되게(클릭했을 때 실행되도록)
      */}
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <button onClick={(e) => alertMsg(e, 'msg')}>alert 출력</button>
    </div>
  );
};
export default SayFunction;
// 매개변수 있을 경우엔 화살표 함수이용
// 함수에 인자 보내기: 인자기 있는 함수는 익명함수로 감싸서 처리
// 원래 불가능한 것도 함수 표현식에 따라 가능해질 수도 있으니 가능한 다양한 표현 방법을 알아야 좋을 것 같다. 어떻게 공부해야할까?
// 왜 매개변수를 이용하여 만들어낼 수 있는 ,활용할 수 있는 게 뭘까?
// 이벤트 객체 (js : e.target~~~) 똑같이 리액트에서도 쓸 수 있음
// 이벤트 객체(쓸 때 명시해야 함) 말고도 내가 넘겨줄 매개변수가 있냐없냐의 차이(다른 매개변수가 있으면 충돌날 수 있으므로 명시해야함), 보낼 것이 없으면 위 파라미터에만 명시를 해주면 됨
