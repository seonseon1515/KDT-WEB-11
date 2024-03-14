import { Component } from 'react'; //항상 써야하는 건가보다 그 리액트 내장 기능이라고 하신듯
import PropTypes from 'prop-types'
// prop-rypes 라이브러리를 PropTypes 이름으로 임포트
// FunctionComponent 는 안 가져옴?
// 리액트 제공 기능

// 원하는 클래스 이름 작성(보통 파일 명과 동일하게)
class ClassComponent extends Component {
  //클래스형 컴포넌트는 render 함수가 필수
  render() {
    console.log('props: ', this.props);
    // 콘솔 찍은 이유??
    const { name } = this.props;
    // class 에서는 자기자신에게 this를 붙여줌
    return (
      <div>
        <h1>Hi{this.props.name}</h1>
        <h1>Hi{name}</h1>
        <h1>Hi</h1>
      </div>
    );
  }
}

// ClassComponent.defaultProps = {
//   name: '홍길등',
// };

// 태그 안에 쓸 경우 children(자식 내용) - 고정값(레이아웃 잡고 할 때 많이 쓰임)

ClassComponent.propTypes = {
  name: PropTypes.string.isRequired,
  //isReauired : 필수값
};
// 보통 프로젝트에는 classcomponent or functioncompopnent 둘 중하나 만쓰는데 둘다쓰는 과정에서 오류를 잡지 못할 수 있음
// isRequired 는 defaultProps가 없을 때 작동 

export default ClassComponent;
