import PropTypes from 'prop-types';
import { Component } from 'react';

export default function FunctionComponent(props) {
  //const {name} = props(위의 파라미터 안의 내용도 같은 내용)
  // props 안의 name
  // const name = props;
  // 파라미터 안에 넣어야하는 것이 props로 고정이 되어있으므로 객체분해해서 아래에 써주지 않아도 그냥 파라미터 안에 객체와 속성 값들만 넣어줘도 된다고 하신 것으로 기억하는데 왜 그렇게 하면 오류가 날까??
  return (
    <div>
      {/* <h1>Hi {props.name}</h1> */}
      {/* 파라미터 안에 props를 넣어줘야 사용 가능 */}
      <h1>Hi {props.name}</h1>
      <div>{props.children}</div>
    </div>
  );
}

// .을 찍어 접근하기 귀찮으면 객체분해할당
// 파라미터에 프롭스 밖에 안받기 때문에 파라미터 안에서 직접 구조분해할당해서 변수 선언 가능

// 디폴트 형태
FunctionComponent.defaultProps = {
  name: '홍길등',
};

// 태그 안에 쓸 경우 children(자식 내용) - 고정값(레이아웃 잡고 할 때 많이 쓰임)

FunctionComponent.propTypes = {
  name: PropTypes.string.isRequired,
  time: PropTypes.number,
};
// string과 같은 type을 쓰기 위해 임폴트 해옴
// 알려주는 용도? 개발자 도구 켜보면 경고 뜸
