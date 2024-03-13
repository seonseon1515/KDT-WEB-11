import { useState } from 'react';

export default function StatePractice2() {
  const [stateNum, setMessage] = useState(0);

  // 배열 비구조분해할당을 한 변수를 가져와서 쓰는 방법?
  // return() 안에 있을 경우 객체 {} 안에 넣어서 써야 되는 것 같음
  // 그냥 따라치지만 말고 어디에서 어떤 표현방법으로 쓰는지 잘 보면서 알아두기
  const Increase = () => {
    setMessage(stateNum + 1);
  };

  const Decrease = () => {
    setMessage(stateNum - 2);
  };
  return (
    <div>
      <h1>{stateNum}</h1>
      <button onClick={Increase}>+1</button>
      <button onClick={Decrease}>-2</button>
    </div>
  );
}

