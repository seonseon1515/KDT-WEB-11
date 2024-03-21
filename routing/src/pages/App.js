import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import logo from '../logo.svg';
import '../App.css';
import Header from '../components/Header';
import MainPage from './MainPage';
import ProductPage from './ProductPage';
import NotFound from './NotFound';
import ProductDetailPage from './ProductDetailPage';
import PracticeRouter from '../components/PracticeRouter';
import PracticeStudent from './PracticeStudent';
import PracticeCodingon from './PracticeCodingon';
import PracticeParams from './PracticeParams';

function App() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    setProducts(res.data.slice(0, 10));
    console.log('products', res.data.slice(0, 10));
  };

  // products라는 페이지에 들어갔을 때만 필요한 데이터, 계속 프롭스를 넘겨줘야 되는 현상이 일어남 => 프롭스 드릴링
  // 프롭스 드릴링 해결방법 기능 찾아서 사용해보기
  // context api?

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          {/* 라우트와 path와 맞는 주소를 찾음 -> 새로 고침, 페이지 변화 없이 경로에 따라 컴포넌트(적힌 내용)만 달라짐*/}
          <Route path="/" element={<MainPage />} />
          <Route
            path="/products"
            element={<ProductPage />}
            product={products}
          />
          <Route
            path="/products/:productId"
            element={<ProductDetailPage />}
            product={products}
          />

          {/* newStudentName라는 변수를 만들어 준 것 */}
          {/* 쿼리스트링일 경우 값을 가져와서 사용 */}
          <Route path="*" element={<NotFound />} />
          {/* path="*"은 위에서부터 경로를 훑고 내려와서 경로에 없는 값이 올 때에만 적용 */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

{
  /* <Route path='/' element={<PracticeRouter />} />
          <Route path='/student/kdt' element={<PracticeStudent />} />
          <Route path='/student/codingon' element={<PracticeCodingon />} />
          <Route path='/student/:newStudentName' element={<PracticeParams />} /> */
}

// 코드는 그냥 화면상에 상상했던 어떤 것을 구현하다 보면 따라와지는 거 아닐까?
// 다양한 로직을 머릿속에 떠올리고 코드로 쳐보는 것도 중요한 것 같다.
  
// 오늘 공부할 것 
// 1. aixos.get(링크) 추가? or   아니면 링크에 있는 데이터를 가져오는 것?
// 2. useEffect 사용해보기
// 3. 쿼리스트링 값 가져오는 것