// PostList 컴포넌트 입니다.
import { useEffect, useState } from 'react';
import PracticePostItem from './PracticePostItem';
import Post  from '../types';



  const PostList = () => {
  // 아래의 useeffect를 활용하면 setPosts 에서 초기값을 바로 할당 가능?
  const [posts, setPosts] =useState<Post[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const jsonData = await res.json();

      setPosts(jsonData.slice(0, 10));
    };

    setTimeout(() => {
      getPosts();
    }, 2000);
  }, []);

  return (
    <div className='PostList'>
      <header>Post List</header>
      {posts.length > 0 ? (
        posts.map((post) => {
          // 값을 다 나타내고 싶을 때  post={post} 왜 에러뜨는지?
          return <PracticePostItem key={post.id} post={post} />;
        })
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default PostList;
