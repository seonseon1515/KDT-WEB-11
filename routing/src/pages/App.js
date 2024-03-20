import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from '../logo.svg';
import '../App.css';
import Header from '../components/Header';
import MainPage from './MainPage';
import ProductPage from './ProductPage';
import NotFound from './NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          {/* 라우트와 path와 맞는 주소를 찾음 -> 새로 고침, 페이지 변화 없이 경로에 따라 컴포넌트(적힌 내용)만 달라짐*/}
          <Route path="/" element={<MainPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="*" element={<NotFound />} />
          {/* path="*"은 위에서부터 경로를 훑고 내려와서 경로에 없는 값이 올 때에만 적용 */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
