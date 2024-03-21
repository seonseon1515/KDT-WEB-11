import React from 'react';
import { useForm } from 'react-hook-form';
// 리액트 훅 폼을 이용하게 되면 유효성 검사, 에러처리를 알아서 해줌

export default function Form() {
  const {
    register, //input 에 할당, value 변경 감지, name 명시
    handleSubmit, // form이 submit 될 때 호출
    formState: { errors }, // form 상태 객체 - errors 라는 값이 들어있음
    watch //특정 값을 가져옴
  } = useForm();

  //handleSubmit(FuncA[, FuncB]): 두개의 함수를 인자로 받음
  // - FuncA: 필수, 유효할 때 실행
  // - FuncB: 선택, 유효하지 않을 때 실행
  // 이름 맘대로 지은 것이기 때문에 해당 함수들을 만들어 주어야 함

  const onVaild = (data) => {
    console.log('onVaild', data);
  };
  const onInvalid = (err) => {
    console.log('OnInvalid', err);
  };
  console.log('errors', errors);
  console.log('watch',watch('username'))


/* name='username' 기능을 register에서 명시하면 input 태그의 이름을 username으로 인식 */
  
  return (
    
    <div>
      <h1>react-hook-form 라이브러리 데모</h1>
      <form onSubmit={handleSubmit(onVaild, onInvalid)}>
        <input type="text" placeholder="username" 
        
        {...register('username', {
          required:
            '필수로 입력해야 하는데 입력을 안했을 때 나타내 줄 메세지(ex)이름을 입력해주세요)',
          minLength: {
            message: '이름은 최소 2글자 이상 입력해주세요.',
            value: 2,
          },
        })}
        />
        
        {/* username 에러메세지 */}
        {/* 있으면 하고 없으면 맞나? */}
        {errors.username?.message}

        <br />
        <input type="email" placeholder="email (gmail)" />
        {...register('email',{
          required: '이메일을 입력해주세요.',
          validate:{
            useGamil: (value) => { 
              return (value.includes('gmail.com') || 'gmail로만 가입 가능합니다.')
            }
          }
        }
        )}
        {errors.email?.message}
        <br />
        <input type="password" placeholder="password" />
        {...register('password')}
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
