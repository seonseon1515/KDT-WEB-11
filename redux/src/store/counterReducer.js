// store안에 들어갈 값 정의(2가지)

// 중복 방지(액션을 발생시키는 데에 사용)
const PLUS = 'counter/PLUS';
const MINUS ='counter/MINUS'

// 컴포넌트에서 액션을 쉽게 발생시킬 수 있도록 함수를 사용
export const plus = () => {type:PLUS} //한 줄이라 return 생략
export const minus = () => {
  return {type:MINUS}
}

// state의 초기값 정의
const initialState = {
  number: 50,
};
// 상태 가져와서 쓰기, 업데이트가 가능해야 함.(리덕스에서는 스토어 안, 리듀서 파일안에 상태가 있기 때문에 가져올 때 useState 대신 useSelector쓰기)
// reducer 정의: 상태 변화를 일으키는 함수(현재 상태 = 초기값, dispatch에서 받아오는 액션)
const counterReducer = (state = initialState, action) => {
  // action 객체 : {type: '',payload: ? => 이 형식으로 값이 들어있음}
  // action에 따라 reducer에 변화가 일어남

  switch (action.type) {
    case PLUS:
      return { number: state.number + 1 };
    case MINUS:
      return { number: state.number - 1 };
    default:
      return state;
  }
};

export default counterReducer;

