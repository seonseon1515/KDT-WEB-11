import React, {useState , useEffect, useCallback} from 'react'
import axios from 'axios';
// useCallback
// - 매번 함수를 생성하지 않고, 함수를 기억해두었다가 필요할 때마다 함수를 재사용
// - 함수를 재사용하는 것
// - 함수를 다시 불러오는 것을 막는 것(함수는 메모리에서 주소값을 갖는데 다시 리렌더링 될 때 이전 주소값이 아니라 새로운 주소값을 할당해서 다시 만든다? 메모리 과사용을 막아주려고 사용, 함수를 주소값이 바뀌지 않고 한번 만들었던 곳에 다시 만들어주려고)

//props로 postId로 받아줌 ->get 의존성 배열에다 넣어주기
export default function UseCallbackEx(postId) {
  const [post, setPost] = useState({});

  //[before]
  // const getPosts = async () => {
  //   console.log('data fetching...')
  //   // get과 연결된 링크로 포스트 가져올 수 있는 듯?
  //   const res = await axios.get('/');
  //   console.log(res.data)

  //   // 글이 하나인 경우(여러개인 경우 slice(0,10))
  //   setPost(res.data);
  // }


  //[after]
  //useCallback 훅으로 메모리제이션 -> 의존성 배열에 postId가 변경되지 않는 한 getPost 다시호출하지 않음 -> 필요한 순간에만 api 요청을 날림
  const getPosts = useCallback( async () => {
    console.log('data fetching...')
    // get과 연결된 링크로 포스트 가져올 수 있는 듯?
    const res = await axios.get('/${postId}');
    console.log(res.data)

    // 글이 하나인 경우(여러개인 경우 slice(0,10))
    setPost(res.data);
  })
// useEffect 의존성 배열에 '함수'  
// 주소값이 바뀌지 않는지 보기 위해 
// 컴포넌트가 리렌더링 된다 -> 함수가 재생성(주소값 변경) -> getPost 재호출
// 리렌더링 되어도 바뀌냐 안바뀌냐?
  useEffect(()=>{
    getPosts()
  },[getPosts])
  return (
    <div>
      <h1>UseCallback Ex</h1>

    {post.id ? post.title : '로딩 중...'}
    </div>
  )
}
