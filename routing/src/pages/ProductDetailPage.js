import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { productInfos } from '../components/ProductList';

export default function ProductDetailPage({products}) {
  const { productId } = useParams();
  console.log('useParams', useParams());
  console.log('productId', productId); // '2'
  // 콘솔값 뭐나오는지? 콘솔에서 뭐 추가하던데 뭐지? e?2?

  // 문자열로 가져왔으나 자바스크립트가 유연한 언어라 -1해도 에러없이 숫자로 인식해서 잘 됨(타입 스크립트의 경우 숫자로 바꿔서 해줘야 함.)
  // page나 함수, const export 해줬으면 import도 해줘야 가능

  const targetProduct = products[productId - 1];
  console.log(targetProduct);
  const { id, name, email, body } = targetProduct;

  const navigate = useNavigate();
  // 링크 태그 없이 이동 가능
  return (
    <div>
      <h1>ProductDetailPage</h1>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로가기
      </button>
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        홈으로 이동
      </button>
      <button
        onClick={() => {
          navigate(+1);
        }}
      >
        앞으로 가기
      </button>
      <ul>
        <li>상품 번호: {id}</li>
        <li>상품명: {name}</li>
        <li>판매자: {email}</li>
        <li>상품 설명: {body}</li>
      </ul>
    </div>
  );
}
