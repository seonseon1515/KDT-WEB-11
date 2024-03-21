import React from 'react';
import { useForm } from 'react-hook-form';

export default function FormPractice() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const showData = (data) => {
    console.log('showData', data);
  };

  const showErrors = (err) => {
    console.log('showData', err);
  };

  console.log(errors)

  return (
    <div>
      <form onSubmit={handleSubmit(showData, showErrors)}>
        <input
          type="text"
          placeholder="이름"
          {...register('name', {
            required: '이름은 필수항목입니다.',
          })}
        />

        <input
          type="text"
          placeholder="나이"
          {...register('age', {
            required: '나이는 필수항목입니다.',
            minAge: {
              minAge1: (value) => {
                return value > 0 && '나이는 0 이상의 숫자만 가능합니다.';
              },
            },
          })}
        />

        <button>제출</button>
      </form>
    </div>
  );
}
