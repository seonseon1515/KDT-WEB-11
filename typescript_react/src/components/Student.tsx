// Props => name, grade, part, handleClick()
// props의 타입을 지정해주기
import React, { useState } from 'react'

interface StudentInfo {
  name:string;
  grade:number;
  part?:string; // optional 한 props(optinal 요소에서는 기본값을 미리 넣어놓을 수 있음)
  handleClick:(name:string,grade:number) => void; // 함수를 props로 넘겨줄 것이기 때문에 실제로 함수는 상위 컴포넌트에 있을 것(여기서는 타입 지정하는 것만 추가)
}

export default function Student({name, grade, part, handleClick}:StudentInfo) {
  // 제네릭 설정값으로만 타입을 설정 가능
  const [score, setScore] = useState<number>(0)
  return (
    <div>
      <ul onClick={()=>handleClick(name,grade)}>
        <li>이름:{name}</li>
        <li>학년:{grade}</li>
        <li>전공:{part || '자유전공'}</li>
      </ul>
    </div>
  )
}
