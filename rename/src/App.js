import logo from './logo.svg';
import './App.css';
import SyntheticEvent from './SyntheticEvent';
import ClassBind from './ClassBind';
import Counter from './Counter';
import HendlerEx from './Components/Ex/HendlerEx.js'
import HendlerEx2 from './Components/Ex/HendlerEx2.js';
import HandlerEx3 from './Components/Ex/HandlerEx3.js';
import HandlerEx4_1 from './Components/Ex/HandlerEx4_1.js';



function App() {
  return (
    <div className="App">
      <SyntheticEvent />

      <hr />
      <ClassBind />

      <hr />
      <Counter />

      <hr />
      <HendlerEx />

      <hr />
      <HendlerEx2 />

      <hr />
      <HandlerEx3 />

      <hr />
      <HandlerEx4_1 />

    </div>
  );
}

export default App;
