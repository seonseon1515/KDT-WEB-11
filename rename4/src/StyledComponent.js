import React from 'react';
import styled from 'styled-components';
// import 뿐만 아니라 npm i styled-components 해야함

// html tag wrapper: ctrl+shift+i?(확장파일 사용법)
// vscode-styled-components: 백틱 안에서 css 문법이 자동완성 됨(확장파일)
// 별도의 css, scss 파일 import가 필요없음
// CSS in JS: css를 js 파일에 적는 방식
// - styled-component, emotion, styled-jsx, ...
// 장점: 모듈과 동일하여 각각의 컴포넌트마다 격리된 스타일 적용 가능

const StyledContainer = styled.div`
  display: flex;
`;

const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.bgColor || 'blue'};

  &:hover {
    transfrom: translateY(-20px);
  }
`;

export default function StyledComponent() {
  return (
    <StyledContainer>
      <StyledBox bgColor="red" />
      <StyledBox bgColor="orange" />
      <StyledBox bgColor="yellow" />
      <StyledBox />
    </StyledContainer>
  );
}

// 이거 카멜케이슨지 뭔지 첨부터 대문자로 안쓰면 안 뜨는 듯??
