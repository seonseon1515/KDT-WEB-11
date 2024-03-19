import { useState } from 'react';

export default function HendlerEx2() {
  const [colorTxt, setColorTxt] = useState('검정색 글씨');
  const [color1, setColor] = useState({color:'black'});


  const changeblue = () => {
    
    setColorTxt('파란색 글씨');
    setColor({color:'blue'});
  };

  const changeRed = () => {
    
    setColorTxt('빨간색 글씨');
    setColor({color:'red'});
  };

  return (
    <div>
      <h1 style={color1}>{colorTxt}</h1>
      <button onClick={changeblue}>파란색</button>
      <button onClick={changeRed}>빨간색</button>
    </div>
  );
}

// state로 style을 바꿀 수 있음
