import React from 'react';
import { useSearchParams } from 'react-router-dom';

export default function MainPage() {
  //쿼리스트링의 변수 , 쿼리스트링을 설정할 수 있는 함수가 반환
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get('mode')); // null or dark
  // /=> null
  // /?mode=dark => dark
  return (
    // join()의 경우에 null은 포함하지 않음
    // 버튼을 누르면 darkmode라는 이름 추가됨?
    <div className={['Main' ,searchParams.get('mode')].join(' ')}>
      <h1>Home</h1>
      <button
        onClick={() => {
          setSearchParams({ mode: 'dark' });
        }}
      >다크모드</button>
    </div>
  );
}
