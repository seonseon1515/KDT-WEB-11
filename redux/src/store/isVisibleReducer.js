// 리듀서를 새로 만들 때는 하나의 파일을 추가해줌

const initialState = true;

// state를 처음 초깃값으로 만들어 줌
const isVisibleReducer = (state = initialState, action) => {
  // switch 문으로 검사
  // 왜 다 대문자로 쓰지?
  if (action.type === 'CHANGE') {
    return !state;
  }
  return state;
};

export default isVisibleReducer;
