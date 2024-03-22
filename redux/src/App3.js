import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { plus } from './store/counterReducer';
import { minus } from './store/counterReducer';

export default function App3() {
  // store에 있는 상태 가져오기(useSelector(store에 있는 상태))
  // const number = useSelector((state) => state.counter.number); // 초기값이 객체이기 때문에 점을 찍어 접근
  // console.log(useSelector((state) => state.number));

  const isVisible = useSelector((state)=>state.isVisible) // 지금은 true이기 때문에 점 찍어 접근할 필요 x
  return (
    <div>
      <h1>React Redux Ex</h1>
      <h2>isVisible 값은 "{isVisible ? "참":"거짓"}"이다.</h2>
      <Box1 />
    </div>
  );
}

const Box1 = () => {
  return (
    <div className="Box">
      <h2>Box1</h2>
      <Box2 />
    </div>
  );
};

const Box2 = () => {
  return (
    <div className="Box">
      <h2>Box1</h2>
      <Box3 />
    </div>
  );
};

const Box3 = () => {
  return (
    <div className="Box">
      <h2>Box1</h2>
      <Box4 />
    </div>
  );
};

// 실질적으로 state가 필요한 자식 컴포넌트
// dispatch로 액션 발생시킬 때 => 타입 넘겨주기

const Box4 = () => {
  const dispatch = useDispatch();
  return (
    <div className="Box">
      <h2>Box1</h2>
      {/* 상태 변화 캐치 */}
      {/* <button onClick={() => dispatch(plus())}>PLUS</button>
      <button onClick={() => dispatch(minus())}>MINUS</button> */}


      
      <button onClick={()=> dispatch({type:'CHANGE'})}>CHANGE</button>

    </div>
  );
};

// 프로젝트 구조를 만들 때에도 redux를 이용하여 전역으로 관리할지 props로 넘겨줄 건지 고려해서 사용
