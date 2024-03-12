function Clock() {
  // 대문자 안되는 거 뭐였지?
  // 파일명과 동일할 필요 x
  // app.js 를 참고해서 함수형 컴포넌트를 만드는 과정

  return (
    <div>
      {/* 사용자의 문화권에 맞는 표기법으로 리턴 */}
      <h1> 현재 시간은 {new Date().toLocaleTimeString()}</h1>
    </div>
  );
}
// 변경된 부분만 다시그린다 ex) 시간
// 시간처럼 변하는 부분만 새로 그림
// 새로고침 없이 동적 ui 가능
export default Clock;
