// 애벌레 만들기
import grass from './grass.png';
// 이미지 가져오기

function Practice1() {
  const div0Styles = {
    display: 'flex',
  };
  const div1Styles = {
    borderRadius: '50%',
    width: '100px',
    height: '100px',
    backgroundColor: 'red',
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    left: '0px',
    bottom: '20px',
    zIndex: '1',
  };
  const div2Styles = {
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    zIndex: '2',
  };
  const div3Styles = {
    borderRadius: '50%',
    width: '15px',
    height: '15px',
    backgroundColor: 'black',
    zIndex: '3',
  };
  const div4Styles = {
    borderRadius: '50%',
    width: '100px',
    height: '100px',
    backgroundColor: 'orange',
    position: 'absolute',
    left: '80px',
    bottom: '30px',
    zIndex: '4',
  };
  const div5Styles = {
    borderRadius: '50%',
    width: '100px',
    height: '100px',
    backgroundColor: 'yellow',
    position: 'absolute',
    left: '160px',
    bottom: '60px',
    zIndex: '5',
  };
  const div6Styles = {
    borderRadius: '50%',
    width: '100px',
    height: '100px',
    backgroundColor: 'green',
    position: 'absolute',
    left: '240px',
    bottom: '20px',
  };
  const div7Styles = {
    borderRadius: '50%',
    width: '100px',
    height: '100px',
    backgroundColor: 'blue',
    position: 'absolute',
    left: '320px',
    bottom: '10px',
  };

  return (
    <>
      <div className="wrap" style={div0Styles}>
        <div style={div1Styles}>
          <div style={div2Styles}>
            <div style={div3Styles}></div>
          </div>
        </div>
        <div style={div4Styles}></div>
        <div style={div5Styles}></div>
        <div style={div6Styles}></div>
        <div style={div7Styles}></div>
      </div>

      <img
        src={grass}
        alt=""
        style={{
          position: 'absolute',
          bottom: '10px',
          zIndex: '4',
        }}
      />
    </>
  );
}

export default Practice1;

// src 폴더에 이미지가 있는 경우 -> import 경로 설정, 변수 만들어 가져옴
// css 파일을 만들었을 경우 백그라운드 이미지로 잔디를 활용가능
// css 문법 background-img:url('./grass.png); <- 코드 추가하여 상대경로로 가져올 수 있음

// public 폴더에 이미지가 있는 경우
// 기본 절대경로로 처리가 되어있어서 정적처리가 되어 이미지 파일 자체에 접근 가능(검사 눌러보면 주소 구체적으로 어떻게 쓰는지 나옴)
// 퍼블릭 이미지 접근
// '/'하면 경로가 퍼블릭!(루트폴더가 퍼블릭으로 되어있나?)
// <img src='/logo192.png' alt='logo' />


// 학습할 부분 -> public 과 src의 차이 각각의 장단점 찾아 블로깅 하기
