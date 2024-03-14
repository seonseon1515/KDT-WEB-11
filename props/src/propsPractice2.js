import bookCover from './bookCover.jpeg';

export default function Book(props) {
  // 객체분해 할당을 파라미터에서 해도되는데 왜 오류뜨지??
  // 파라미터에 {book}
  // const {title, author, price, type} = book; 하면 부모에서 선언한 객체 사용 가능
  const { title, author, price, type } = props;
  return (
    <div
      className="bookWrap"
      style={{
        backgroundColor: 'yellow',
        width: '500px',
        height: 'fitContent',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            color: 'orange',
            fontSize: '20px',
            fontWeight: '700',
          }}
        >
          {title}
        </div>
        <div>
          <img
            src={bookCover}
            style={{
              width: '100px',
              height: '200px',
            }}
          ></img>
        </div>
      </div>
      <p>{props.children}</p>
      <span
        style={{
          fontSize: '10px',
          textAlign: 'left',
        }}
      >
        저자: {author}
      </span>
      <span
        style={{
          fontSize: '10px',
          textAlign: 'left',
        }}
      >
        <br />
        판매가: {price}원
      </span>
      <span
        style={{
          fontSize: '10px',
          textAlign: 'left',
        }}
      >
        <br />
        구분: {type}
      </span>
    </div>
  );
}

// 어떤 기능을 편하게 혹은 더 잘 쓰고 싶은 필요성이 느껴질 때 코드의 다양한 표현방식을 찾거나 탐구하는 것이 낫겠지? 지금은 이 문법을 쓴 지 얼마 안 됐으니까 적응하는 것이 먼저 필요할 듯! 적응하고 잘! 써야 다음 단계로 넘어갈 수 있으니까