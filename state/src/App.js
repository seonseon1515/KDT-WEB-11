import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import SayFunction from './SayFunction';
import PropsPractice3 from './PropsPractice3';
import StatePractice1 from './StatePractice1';
import StatePractice2 from './StatePractice2';

function App() {
  return (
    <div className="App">
      <Counter />

      <hr />
      <SayFunction />

      <hr />
      <PropsPractice3
        text="정상 출력 문구"
        valid="콘솔 출력 실패"
      ></PropsPractice3>

      <hr />
      <StatePractice1 />

      <hr />
      <StatePractice2 />
    </div>
  );
}

export default App;
