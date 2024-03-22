import './App.css';
import { useState } from 'react';


function App() {
  const [number, setNumber] = useState(100);
  const plus = () => {
    setNumber(number+1)
  }
  const minus = () => {
    setNumber(number-1)
  }
  return (
    <div className="App">
      <h1>React Redux 사용 전</h1>
      <Box1 number={number} plus={plus} minus={minus}/>
    </div>
  );
}

// app 밖에서 자식 컴포넌트 계속 만들어주기(의도적으로 리덕스가 필요한 상황을 만들어 필요성을 인식하기 위해)

const Box1 = ({number,plus,minus}) => {
  return(
    <div className='Box'>
      <h2>Box1: {number}</h2>
      <Box2 number={number} plus={plus} minus={minus}/>
    </div>
  )
}

const Box2 = ({number,plus,minus}) => {
  return(
    <div className='Box'>
      <h2>Box2: {number}</h2>
      <Box3 number={number} plus={plus} minus={minus}/>
    </div>
  )
}
const Box3 = ({number,plus,minus}) => {
  return(
    <div className='Box'>
      <h2>Box3: {number}</h2>
      <Box4 number={number} plus={plus} minus={minus}/>
    </div>
  )
}
const Box4 = ({number,plus,minus}) => {
  return(
    <div className='Box'>
      <h2>Box4: {number}</h2>
      <button onClick={plus}>PLUS</button>
      <button onClick={minus}>MINUS</button>
    </div>
  )
}
// 상태를 전달받기 위해 자기 직속 자식에게 프롭스를 계속 넘겨줌

export default App;
