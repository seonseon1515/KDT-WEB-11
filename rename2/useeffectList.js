// key값을 줘야하는 이유 뭐더라?
// key 값을 표시안되게 하는법ㅂ?
// 나는 어떻게 하면 행복하게 살까?
// 백엔드 코드도 배워야 됨..,.,., 어제 못 온거 추가

import { useEffect } from 'react';

//api 요청을 통해 가져오기


//useEffect에서 axios하는 법?
//2번 방법
//axios install하여 import 하기
// 마운트되는 시점을 감지하기 위해 useeffect사용해야함
// 값이 받아와질 때까지 await 기다리기!
// useEffect(()=>{
//   // getPosts 함수를 만든 이유
//   // : useEffect를 사용할 때는 비동기 작업을 함수로 래핑한 다음 useEffect 콜백에서 호출하기
//   // useEffect는 비동기 작업을 지원하지 않음

//   const getPosts = async() =>{
//     const res = await axios.get(링크)
//     console.log(res.data);
    
//     setPosts(res.data.slice(0,10));
//     // 값을 기다렸다가(loading을 길게 두고 싶으면) 보고 싶으면 셋타임아웃 이용
//   }
// },[])

// 안되는 경우
// 페이지가 로딩될 때 해야되는 일 -> 마운트될 때 화면에 필요한 값들도 설정하고 백에서 데이터를 가져오기(useEffect를 통해 가능)

// useEffect(async () => {
//   const res = await axios
// })
