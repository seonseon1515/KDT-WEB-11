import React, { Component } from 'react';

class HendlerEx extends Component {
  state = {
    name: 'hello world~',
  };


  render() {
    const {name} = this.state
    return (
      <div>
        <h1>{name}</h1>
        <button onClick={()=>{
          this.setState({name: 'goodbye World'})
        }}>change!</button>
      </div>
    );
  }
}

export default HendlerEx;

