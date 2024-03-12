function Practice5() {
  const title = '안녕하십니까';
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          backgroundColor: 'orange',
          color: 'red',
          width: '300px',
          height: '50px',
          textAlign: 'center',
        }}
      >
        {title}
      </div>
      <div>
        아이디: <input type="text" />
      </div>
      <div>
        비밀번호: <input type="password" />{' '}
      </div>
    </div>
  );
}

export default Practice5;
