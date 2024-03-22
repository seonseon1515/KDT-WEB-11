const initialState = {
  cash: 0,
};

const DEPOSIT = 'bank/DEPOSIT';
const WITHDRAW = 'bank/WITHDRAW';

export const deposit = () => {
  return { type: DEPOSIT };
};
export const withdraw = () => {
  return { type: WITHDRAW };
};

// 해당 reducer에서 값을 받아와야 함
// reducer 함수에서 state 값을 변경시킬 수 있음
// dispatch를 실행할 때 reducer가 시행이 되기 때문에 dispatch를 통해서 리듀서로 넘겨줄 수 있음(페이로드)
const bankReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEPOSIT:
      return { cash: state.cash + action.payload };
    case WITHDRAW:
      return { cash: state.cash - action.payload };
    default:
      return state;
  }
};

export default bankReducer;
