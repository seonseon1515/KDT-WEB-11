import React,{useState} from 'react'

// 로직만 짜서 함수로 사용
export default function UseToggle(initValue=false) {
  // value: 토글의 상태
  //setValue: 토글 상태를 변화시키는 setter
  const [value, setValue] = useState(initValue);

  // 토클 상태 스위칭
  const toggleValue= () => {
     setValue(!value)
  }
  
  return ([value, toggleValue]
  )
}
