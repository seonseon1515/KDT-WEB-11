import React from 'react'
import {useState, useMemo} from 'react'

// useMemo
// - 메모리제이션으로 수행한 연산값을 기억함으로써 불필요한 연산 최소화
// 값을 재사용
export default function UseMemoEx(){
  const [count, setCount] = useState(0);
  // 상관없는 state
  const [input, setInput] = useState('');
// 리렌더링 될 때 함수, 변수가 다시 호출이 되어 다시만들어짐
// input이라는 state로 값이 변경될 때 리렌더링이 다시 됨 
// 그래서 calc() 함수도 다시 호출이 됨(콘솔로 확인가능)
// 카운트랑 상관없는 다른 state가 변할 때 불필요한 연산을 하게 됨 
// 카운트가 변할 때 다시 실행하라 => useMemo()
// 기억해두려면 메모리를 써야하기 때문에 적절히 판단하기
// 버튼을 누를 때에도, input 입력할 때에도 연산이 이뤄짐(calc 함수를 계속 호출) => useMemo 렌더링 과정에서 특정 값을 기억해서 바뀔 때만 연산이 되도록 최적화


  //임의의 큰 연산을 하는 함수
  //[before]
  // const calc = () => {
  //   console.log('열심히 계산 중');

  //   for(let i; i<10000000; i++){}
  //   return count**2;
  // }


  //[after]
  // count의 값이 바뀔 때만 함수를 실행
  // input의 상태가 바뀌면 컴포넌트는 리렌더링, 이 떄 calc는 연산되지 않게끔
// 값을 메모리에 기억해놓고 가져와서 쓰기
const calc = useMemo(()=>{
  for(let i; i<10000000; i++){}
    return count**2;
},[count])


  return (
  <div>
    <h1>UseMemo Ex</h1>
    <button onClick={() => setCount(count+1)}>+ 1</button>
    <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
    <div> count: {count}</div>

{/* bofore */}
    {/* <div>calc: {calc()}</div> */}

    {/* after */}
    {/* 왜 변수에 담아줌? */}
    <div>calc: {calc}</div>
  </div>);
}