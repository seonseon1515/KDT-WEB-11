import logo from './logo.svg';
import './App.css';
// css 파일 가져오기 

function App() {
  const name = `나선경`;
  const styles = {
    color: 'blue',
    fontSize: '48px',
    backgroundColor: 'yellow',
  };

  return (
    <>
      <div className="App">
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

        {/* JSX 문법 
      1. 부모로 감싸진 요소 -> 왜 굳이???
       프래그먼트 -> 의미없이 태그를 쓰지 않고 부모 태그로 묶어주기 위해*
       2. 자바스크립트 표현식 사용
    - {}로 감싸면 js 표현식 사용 가능
    - if문 ,for문 제외 삼항연산자 사용 가능*/}
        <div>안녕?</div>
        <div>반갑다</div>
        <div>{name === '나선경' ? 'kdt 11기' : '누구세요?'}</div>
      </div>

      {/* 3. style 속성
        - 리액트에서 dom 요소에 스타일 적용시 문자열 x -> 객체 사용
        - 스타일 이름 중 하이픈(-) 포함시 camelCase 로 작성해야 함(js랑 같이쓰기 떄문에 빼기로 인식할 수있음)
        - 첫번쨰 중괄호는 js 문법 사용하겠다는 의미 
        그 다음 중괄호는 객체의 중괄호를 넣어줌 */}

      <div style={styles}>하이</div>
      <div
        style={{
          color: 'blue',
          fontSize: '48px',
          backgroundColor: 'pink',
        }}
      >
        하ㅣㅇ하ㅣㅇ
      </div>

      {/* 4. className 사용
        - class 속성이 아닌 className 사용(기존 js의 class와 겹치지 않게 왜 다르게 해야 하는지?)
        
        5. 원래 종료 태그가 없는 태그를 사용할 때의 경우!
          - 기존의종료 태그가 없는 태그 사용하더라도 종료 태그를 작성 해야 함. or self-closing
          ex) <br> -><br />(한칸띄고 /) or <br></br>

        6. 주석
        - // : jsx 외부주석
        - {/**(/)} : jsx 내부 주석
        */}

      {/* 중간중간 프리티어알씨 동작 확인도 가능 */}
      <div>안녕{name}</div>
    </>
  );
}

export default App;
