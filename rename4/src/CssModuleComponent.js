import React from 'react'
import styles from './styles/cssModule.module.css'
// 객체 변수 이름 보통 styles로 씀(import 할 때 변수명 암거나 정해서 써주는 듯 )


// CSS 모듈
// - 클래스명 중복 방지(한 페이지 안에서 여러 컴포넌트가 쓰일 수 있으므로)
// - CSS 파일 확장자: .module.css
// - 리액트 컴포넌트 파일에서 해당 css 파일을 불러올 때, css 파일에 선언한 클래스 이름들이 고유한 값을 가짐
// - 고유한 css 클래스 이름이 만들어지는 과정에서 파일 경로, 파일 이름, 클래스 이름, 해시 값 등이 쓰임
// 클래스 이름을 동적으로 주고 싶을 때 join을 이용해서 묶어줄 수 있음

export default function CssModuleComponent() {
  console.log(styles)
  return (
    
    <div className={styles.container}>
      <div className={[styles.box, styles.red].join(' ')}></div>
      <div className={[styles.box, styles.orange].join(' ')}></div>
      <div className={`${styles.box} ${styles.yellow}`}></div>
    </div>
  )
}
