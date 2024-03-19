import { useState } from 'react';
import peach from '../../peach.jpeg';
import apple from '../../apple.jpeg';
import Select from './select';
import Result from './Result';
import Input from '../../Input';

// export default function HandlerEx4() {
//   const [color, setColor] = useState({ color: 'black' });
//   const [backgroundColor, setbackgroundColor] = useState({
//     backgroundColor: 'white',
//   });
//   const [fruitUrl, setUrl] = useState({ apple });

//   const changeColor = (color, obj) => {

//   }

  

//   return (
//     <div>
//       과일 :
//       <select name="fruits" id="">
//         <option value>사과</option>
//         <option value>복숭아</option>
//       </select>
//       배경색:{' '}
//       <select name="backgroundColor" id="">
//         <option value>빨강</option>
//         <option className='orangeColor' value={backgroundColor}>
//           주황
//         </option>
//         <option value>노랑</option>
//         <option value>초록</option>
//         <option value>파랑</option>
//         <option value>남색</option>
//         <option value>보라색</option>
//       </select>
//       글자색:{' '}
//       <select name="Color" id="">
//         <option  value>빨강</option>
//         <option value>주황</option>
//         <option value>노랑</option>
//         <option value>초록</option>
//         <option value>파랑</option>
//         <option value>남색</option>
//         <option value>보라색</option>
//       </select>
//       <input type="text" placeholder="내용을 입력하세요" />
//       <div>
//         <img src={fruitUrl} alt="" />
//       </div>
//       <div style={backgroundColor}>
//         <span style={color}>text</span>
//       </div>
//     </div>
//   );
// }

export default function HandlerEx4(){
  // 상태(따로 관리하는 방법)
  // const [fruits, setFruits] = useState('apple');
  // const [backGround, setBackGround] = useState('black');
  // const [color, setColor] = useState('white');
  // const [content, setContent] = useState('text')

  // 한번에 관리
  const [data, setData] = useState({
    fruit:'apple',
    background:'black',
    color:'white',
    content:'text'
  })

  

return(
  <>
  {/* 부모한테 있는 함수를 자식에게 넘겨줘야 해서 */}
    <Select setData={setData}/>
    <Input setData={setData}/>
    <Result data = {data}></Result>
    {/* 위에서 초기화한 data */}
  </>
)}

// 부모에 있는 state 변경하고 싶을 때는 넘겨주면 됨