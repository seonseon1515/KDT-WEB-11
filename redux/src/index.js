import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import counterReducer from './store/counterReducer';
import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import rootReducer from './store';

import { composeWithDevTools } from '@redux-devtools/extension';
// npm i @redux-devtools/extension
import App2 from './App2';
import App3 from './App3';
import PraticeRedux from './PraticeRedux';

// 스토어를 만들던 이전 방법이라 줄이 그어짐
// => toolkit 제공기능 사용하기

// 리액트에서 리덕스를 사용하기 위해 준비해주는 작업(왜 app.js에서 안하고 index.js에서 하지?)

const root = ReactDOM.createRoot(document.getElementById('root'));
// store 정의: 전역 상태를 관리하는 공간(하나의 프로젝트에 하나만!)
// const store =createStore(counterReducer) //deprecated

// composeWithDevTools: 확장 프로그램 사용하는 것(없어도 무관)
const store = configureStore({ reducer: rootReducer }, composeWithDevTools());
// 여태까지 리액트를 사용할 때 개발자 도구툴 많이 사용(구글 크롬에 검색 후 확장 프로그램 추가하면 리덕스를 사용하는 곳에서 활성화됨)
// + react devTools, redux devTools(필수는 아니지만 편리)
// redux를 왜 배우는가?

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PraticeRedux />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
