import { useState } from 'react';

export default function MapPractice() {
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [nameEmail, setNameEmail] = useState([
    { name: 'codi', email: 'codi@gmail.com' },
    {
      name: '나선경',
      email: 'seonseon1515@gmail.com',
    },
  ]);
  // const [email, setEmail] = useState(['codi@gmail.com','seonseon1515@gmail.com']);

  const addUser = () => {
    // 공백 불가
    if (inputName.trim().length === 0 || inputEmail.trim().length === 0) {
      return;
    }

    const newUser = nameEmail.concat({
      name: inputName,
      email: inputEmail,
    });

    setNameEmail(newUser);
    setInputName('');
    setInputEmail('');
  };

  const deleteContent = (name) => {
    console.log(name);
    const deleteNameEmail = nameEmail.filter((name) => {
      return nameEmail.name !== name;
    });
    setNameEmail(deleteNameEmail);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="이름"
        onChange={(e) => {
          setInputName(e.target.value);
        }}
        value={inputName}
      />

      {/* Mampractice2 */}
      <input
        type="email"
        placeholder="이메일"
        onChange={(e) => {
          setInputEmail(e.target.value);
        }}
        value={inputEmail}
        onKeyDown={(e) => {
          if (e.code === 'Enter') {
            addUser();
          }
        }}
      />
      <button onClick={addUser}>등록</button>
      <ol>
        {nameEmail.map((nameEmail) => {
          return (
            <li>
              <h1
                onDoubleClick={() => {
                  deleteContent(nameEmail.name);
                }}
              >{`${nameEmail.name} : ${nameEmail.email}`}</h1>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
