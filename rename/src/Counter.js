import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);
  // 초기값 0

  const increase = () => {
    setNumber(number + 1);
  };

  const alertMsg = (msg) => {
    alert(`${msg}~ 현재 숫자는 ${number}`);
  };

  const alertMsg2 = (e, msg) => {
    alert(`${msg}~ 현재 숫자는 ${number}`);
    console.log(e);
  };
// currentTarget 은 이벤트 핸들러(버튼에 온클릭을 부착했기 때문에)가 있는 요소 -> 부모의 위치
// target은 부모로부터 이벤트가 위임되어 발생하는 자식의 위치, 즉 내가 클릭한 자식 요소
// 이벤트 함수의 필요성? 합성 이벤트 합수?

  const hendleEvent = (e) => {
    console.log('e.target', e.target);
    console.log('e.currentTarget', e.currentTarget);
  };
  return (
    <div>
      <h1>Function Component Event</h1>
      <h2>{number}</h2>

      {/* 함수에 인자가 없는 경우 - 함수 이름만 전달 */}
      <button onClick={increase}>더하기</button>
      {/* 함수에 인자 보내기 - 익명함수로 감싸서 처리 */}
      <button onClick={() => alertMsg('hello~')}>alert 출력</button>
      {/* 이벤트 객체를 사용하고 싶을 때 인자가 있는 경우는 명시해야 할 부분 주의*/}
      <button onClick={(e) => alertMsg2(e, 'hello~')}>alert2 출력</button>
      {/* 추가) e.tartget vs e.currentTarget */}
      <button onClick={hendleEvent}>
        <span>Handle Target</span>
      </button>
    </div>
  );
}
