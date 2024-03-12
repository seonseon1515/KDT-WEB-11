import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // 컴포넌트를 렌더할 때는 파일 불러와서 쓰기
import reportWebVitals from './reportWebVitals';
import Clock from './clock';
import Practice1 from './practice1';
import Practice2 from './practice2';
import Practice3 from './practice3';
import Practice4 from './practice4';
import Practice5 from './practice5';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <h1>Hello world</h1>
//   // <React.StrictMode>
//   //   <App />
//   // </React.StrictMode>
// );

// Clock 렌더링
// 브라우저 전체가 아니라 시간 부분만 새로고침 되고 있음 => virtual dom 때문!(내용이 변경된 부분만 업데이트)
setInterval(() => {
  root.render(
    <React.StrictMode>
      <Clock />
      <App />
      {/* 왜 앱이 렌더링이 안되지? */}
      <Practice1 />
      <Practice2 />
      <Practice5></Practice5>
    </React.StrictMode>
  );
}, 1000);

//index.html -> spa(한가지로 구성된 html?) 건드리면 안됨

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
