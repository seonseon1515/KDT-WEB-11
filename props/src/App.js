// import logo from './logo.svg';
import './App.css';
import ClassComponent from './ClassComponent';
import FunctionComponent from './functionComponent';
import Button from './button';
import Food from './propsPractice1';
import Book from './propsPractice2';

function App() {
  const name = '코딩온';
  const book = {
    title: '리액트',
    author: '리액트2',
    price: '가격',
    type: '개발서',
  };
  // 정보를 통으로 넘겨주는 방법(객체 안에 속성 다 넣기)
  return (
    <div className="App">
      <FunctionComponent name={name} time="2시" />
      <FunctionComponent time="2시" />
      {/* 부모 속성을 자식에게! */}
      <FunctionComponent time="2시">자식 내용</FunctionComponent>
      <FunctionComponent name={[1, 2, 3]} time="14시"></FunctionComponent>
      {/* <hr />
      <ClassComponent name={name} /> */}
      {/* 함수형과 클래스형 컴포넌트 중복 사용 시 prop-types 하나만 뜨는 경우 발생 */}

      <hr />
      <button link="https://www.google.com">
        <span>Google</span>
      </button>
      {/* 우리가 넘겨준 값을 사용하지 않으면 화면에 안 뜸. 화면에 무조건 뜨는 것이 아님
      children은 span 태그를 포함하게 됨 */}

      <hr />
      <Food Food="pasta"></Food>
      {/* 자식 내용 안에 선언한 속성을 사용하는 방법? */}

      <hr />
      <Book
        // title="이번주 베스트 셀러"
        // author="김유진"
        // price="13500"
        // type="자기계발서"
        book={book}
      >
        나의 하루는 4시 40분에 시작된다.
      </Book>
    </div>
  );
}

export default App;
