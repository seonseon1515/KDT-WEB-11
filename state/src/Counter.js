import React, { Component } from 'react';
// 클래스명은 파스칼
// 함수형에서는 원래 state는 없었음
// 클래스에서 어떤 불편함이 생겨서 함수형에서 쓰는 걸까?

class Counter extends Component {
  // state 사용
  // 안에 있는 값은 상태값
  state = {
    number: 0, //초기값은 0, 세미콜론 안씀, 클래스형의 경우 this 사용
    name:'코딩온'
  };
  render() {
    console.log(this.state);
    // 클래스형에서는 this.state로 접근 가능
    const { number } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        {/* state 상태 변경하기 */}
        <button
          onClick={() => {
            this.setState({ number: number + 1 });
            // this.setState(): state 값을 바꾸는 함수
            // state 값 직접 변경 x , 꼭 setState() 함수 이용해야만 가능!
            // 파라미터에 중괄호 감싸서 넣기
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
