// test 파일 지워도 됨
import { Component } from 'react';

class ClassBind extends Component {

  state = {
    name:'codingon',
  }
  // 클래스 컴포넌트에서 이벤트 쓰기 - 화살표 함수 사용, 메서드?
  printConsole = () => {
    console.log('this', this); // 현재 사용하고 있는 컴포넌트를 가르팀
    console.log('state: ', this.state)
  }
  printConsole2 = (msg) => {
    console.log('msg:' , msg);
  }

  // 잘 쓰지 않는 일반 메서드에서 바인드 쓰는 방법.
  // 일반함수 선언일 때 이함수 사용을 위해 추가로 코드를 적어주어야 함 
  //printConsole3(){
  // this.printConsole3 = this. printConsole3.bind(this)
  // bind()는 해당 함수에서 가르킬 this를 직접 설정
  // }
  render() {
    return (
      <div>
        <h1>Class Component Event</h1>
        <button onClick={this.printConsole}>Print Console (인자X)</button>
        <button onClick={() => this.printConsole2('안녕')}>Print Console (인자O)</button>
        {/* 인자있는 함수를 넣을 때는 익명함수로 감싸서 처리 */}
        {/* 화살표 함수 자체에서 바인딩을 자동으로 해줌(this에 묶어주는 과정) */}
      </div>
    );
  }
}

export default ClassBind