import React, { useReducer } from 'react';

const initState = { value: 0 };
const reducer = (prevState, action) => {
  console.log('prevState', prevState);
  console.log('action', action); // => {type:INCREMENT}
};

switch (action.type) {
  case 'INCREMENT':
    return { value: prevstate.value + 1 };

  case 'DECREMENT':
    return { value: prevstate.value - 1 };

  case 'RESET':
    return { value: 0 };

  default:
    break;
}

export default function UseReducerEx() {
  // reducer: 상태를 업데이트하는 함수
  // dispatch: 액션을 발생시키는 함수(액션: state가 어떻게 변경되어야 하는지에 대한 힌트)
  // state: 현재 상태
  // initState: 초기값
  // useReducer는   [state, dispatch]를 리턴함
  const [state, dispatch] = useReducer(reducer, initState);

  // 이벤트 객체 이용해서 스테이트를 업데이트 할 때 필요한 값이 있다면 추가해서 넘겨줄 수 있음
  const incrememt = () => dispatch({ type: 'INCREMENT' });
  const decrement = () => dispatch({type:'DECREMENT'});
  const reset = () => dispatch({type:'RESET'});
  return (
    <div>
      <h1>UseReducer Ex</h1>
      <h2>{state.value}</h2>
      <button onClick={incrememt}>Plus</button>
      <button onClick={decrement}>minus</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}
