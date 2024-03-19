import React, { useState } from 'react';
import apple from '../../apple.jpeg';
import peach from '../../peach.jpeg';

export default function HandlerEx4_1() {
  const [colors, setColors] = useState({
    color: 'black',
    backgroundColor: 'white',
    fruits: apple,
    contents: 'txt',
  });

  return (
    <div>
      <div>
        과일 :
        <select
          onChange={(e) => {
            setColors((colors) => {
              return { ...colors, fruits: e.target.value };
            });
          }}
          name="fruits"
        >
          <option value={apple}>사과</option>
          <option value={peach}>복숭아</option>
        </select>
        배경색:{' '}
        <select
          name="backgroundColor"
          onChange={(e) => {
            setColors((colors) => {
              return { ...colors, backgroundColor: e.target.value };
            });
          }}
        >
          <option value="red">빨강</option>
          <option value="orange">주황</option>
          <option value="yellow">노랑</option>
          <option value="green">초록</option>
          <option value="blue">파랑</option>
          <option value="navy">남색</option>
          <option value="purple">보라색</option>
        </select>
        글자색 :{' '}
        <select
          name="color"
          onChange={(e) => {
            setColors((colors) => {
              return { ...colors, color: e.target.value };
            });
          }}
        >
          <option value="red">빨강</option>
          <option value="orange">주황</option>
          <option value="yellow">노랑</option>
          <option value="green">초록</option>
          <option value="blue">파랑</option>
          <option value="navy">남색</option>
          <option value="purple">보라색</option>
        </select>
        {/* 화살표함수 */}
        {/* 잘 이해안되는듯? */}
        <input
          type="text"
          onChange={(e) => {
            setColors((colors) => {
              return { ...colors, contents: e.target.value };
            });
          }}
        />
      </div>
      <div className="imgSpace">
        <img src={colors.fruits} width={100} height={100} alt="" />
      </div>
      <div
        style={{ backgroundColor: colors.backgroundColor, color: colors.color }}
        className="txtSpace"
      >
        {colors.contents}
      </div>
    </div>
  );
}

