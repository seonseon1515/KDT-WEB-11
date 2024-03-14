export default function Food(props) {
  return (
    <div>
      <span>
        제가 좋아하는 음식은{' '}
        <u
          style={{
            color: 'red',
          }}
        >
          {props.food}
        </u>
        입니다. 크림{' '}
        <u
          style={{
            color: 'red',
          }}
        >
          {props.food}
        </u>{' '}
        가 제일 맛있다고 생각하는데, 이유는 고소하고 느끼해서 입니다. 사이다와
        함께하면 더 좋습니다.{' '}
      </span>
    </div>
  );
}

Food.defaultProps = {
  food: 'pasta',
};
