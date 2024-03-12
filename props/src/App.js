// import logo from './logo.svg';
import './App.css';
import FunctionComponent from './functionComponent';

function App() {
  const name = '코딩온';
  return (
    <div className="App">
      <FunctionComponent name={name} time="2시" />
      <FunctionComponent time="2시" />
      {/* 부모 속성을 자식에게! */}
      <FunctionComponent time="2시">자식 내용</FunctionComponent>
    </div>
  );
}

export default App;
