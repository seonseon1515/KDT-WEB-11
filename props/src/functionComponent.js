import PropTypes from 'prop-types';

export default function FunctionComponent(props) {
  //const {name} = props(위의 파라미터 안의 내용도 같은 내용)
  // props 안의 name
  const name = props;
  return (
    <div>
      <h1>Hi {props.name}</h1>
      {/* 파라미터 안에 props를 넣어줘야 사용 가능 */}
      <h1>Hi {name}</h1>
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
  name: PropTypes.string,
};
// string과 같은 type을 쓰기 위해 임폴트 해옴
// 알려주는 용도? 개발자 도구 켜보면 경고 뜸
