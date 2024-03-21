import React from 'react';
import UseToggle from '../hook/UseToggle';

export default function Faq() {
  const [isFaqOpen, setIsFapOpen] = UseToggle();

  return (
    <div>
      <h1>Costom hook {UseToggle} ex</h1>
      <div style={{ cursor: 'pointer' }} onClick={setIsFapOpen}>
        Q. 리액트에서 커스텀 훅을 만들 수 있나요?
      </div>
      {isFaqOpen && <div>A. 네 그럼요</div>}
    </div>
  );
}
