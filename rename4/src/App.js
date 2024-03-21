import logo from './logo.svg';
import './styles/App.css';
import CssModuleComponent from './CssModuleComponent';
import SassComponent from './SassComponent';
import StyledComponent from './StyledComponent';

import StyledPractice1 from './StyledPractice1';
import StyledPractice2 from './StyledPractice2';

function App() {
  return (
    <div className="App">
      React Styling
       <CssModuleComponent />
       <SassComponent />
       <StyledComponent />

       <hr />
      <StyledPractice1 />
      <StyledPractice2 />
    </div>
  );
}

export default App;
