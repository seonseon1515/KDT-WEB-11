const Button = (props) => {
  const {link, children} = props
  return(
    <a href={link}>
      <button>{children}</button>
    </a>
  )
};

export default Button;

// no-unused-var: 선언했는데 사용하지 않아서 발생하는 것(실행에 문제 없음)
// props 쓸 때 객체분해할당할 때는 객체분해해서만 쓰고 안할때는 props.으로 접근해서 쓰기
