import React, { Component } from 'react';

class StatePractice1 extends Component {
  state = {
    num: 0,
  };
  render() {
    const { num } = this.state;
    return (
      <div>
        <h1>{num}</h1>
        <button
          onClick={() => {
            this.setState({ num: num + 2 });
          }}
        >
          -1
        </button>
        <button
          onClick={() => {
            this.setState({ num: num - 1 });
          }}
        >
          -1
        </button>
      </div>
    );
  }
}
export default StatePractice1