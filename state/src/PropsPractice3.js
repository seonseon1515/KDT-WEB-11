import { Component } from 'react';
import Types from 'prop-types';

class PropsPractice3 extends Component {
  state = {
    vaild: this.props.vaild,
  };

  render() {
    const { text, vaild } = this.props;
    const { valid } = this.state;
    return (
      <div>
        <div>{text}</div>
        <button
          onClick={() => {
            this.setState(console.log({ valid: '콘솔출력성공' }));
          }}
        >
          vaild 콘솔 결과
        </button>
      </div>
    );
  }
}

PropsPractice3.defaultProps = {
  text: '이건 기본 props text 입니다.',
};

PropsPractice3.propTypes = {
  text: Types.string.isRequired,
};

export default PropsPractice3;

// 하위에서 상위로 함수를 넘겨주는 방법 (실습 코드)

// 프롭스로 함수를 넘겨서 실행?

// 자동완성이 안되는 경우가 있음. 우리가 직접 만든 태그가 그럼

// 기본 돔 요소 <- 자동완성 됨

// 굳이 onClick일 필요는 없음

// 합성이벤트? (성능을 더 좋아지게 하기 위해)

// 