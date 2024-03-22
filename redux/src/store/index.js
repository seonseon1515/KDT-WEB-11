import counterReducer from './counterReducer';
import { combineReducers } from 'redux';
import isVisibleReducer from './isVisibleReducer';
import bankReducer from './bankReducer';

// combineReducers: 여러 개의 리듀서를 하나로 합침
// counter로 이름정의(키 값은 맘대로 해도 됨, value는 파일 이름)

// counter말고도 여러개의 리듀서를 사용할 수도 있음(해당하는 타입 앞에 상태 명시)
const rootReducer = combineReducers({
  counter: counterReducer,
  isVisible: isVisibleReducer,
  bank: bankReducer,
});

export default rootReducer;
