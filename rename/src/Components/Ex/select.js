import React from 'react'


export default function Select({setData}){
  return(
    // onChange :셀렉트가 변경될 때 발생하는 이벤트
    // 객체 내부 값 변경: fruit이라는 값만 변경해야할 때 스프레드 연산자 사용
    // 매개변수를 받아오는 이유? 데이타가 의미하는 값이 스테이트의 이전 값
    <div>
      과일 :<select onChange={(e)=>{setData((data)=>{
        return {...data, fruit: e.target.value}
      })}} name="fruits" id="">
         <option value>사과</option>
         <option value>복숭아</option>
       </select>

       배경색:{' '}
       <select name="backgroundColor" id="">
         <option value='red'>빨강</option>
         <option className='orangeColor' value='orange'>
           주황
         </option>
         <option value='yellow'>노랑</option>
         <option value='green'>초록</option>
         <option value='blue'>파랑</option>
         <option value='navy'>남색</option>
        <option value='purple'>보라색</option>
       </select>

       글자색 :{' '}
       <select name="backgroundColor" id="">
         <option value='red'>빨강</option>
         <option className='orangeColor' value='orange'>
           주황
         </option>
         <option value='yellow'>노랑</option>
         <option value='green'>초록</option>
         <option value='blue'>파랑</option>
         <option value='navy'>남색</option>
        <option value='purple'>보라색</option>
       </select>
    </div>
  )
}