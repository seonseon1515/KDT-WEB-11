import React, { useState } from 'react';
import { withdraw, deposit } from './store/bankReducer';
import { useDispatch, useSelector } from 'react-redux';
import bankReducer from './store/bankReducer';
import rootReducer from './store';

export default function PraticeRedux() {
  // useSelector를 이용해서 상태에서 값 가져오기
  const cash = useSelector((state) => state.bank.cash);
  const dispatch = useDispatch();
  const [input, setInput] = useState();

  return (
    <div>
      <h1>코딩온 은행</h1>
      <h1>잔액:{cash}원</h1>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {/* 디스패치 시행시 리듀서 시행 */}
      {/* 페이로드 사용해서 값 넘겨주기? 어떻게 가능한거지? */}
      <button
        onClick={() => dispatch({ ...deposit(), payload: Number(input) })}
      >
        입금
      </button>
      <button
        onClick={() => dispatch({ ...withdraw(), payload: Number(input) })}
      >
        출금
      </button>
    </div>
  );
}
