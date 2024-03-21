import { useState } from 'react';

export default function MapPractice3() {
  const [inputWriter, setInputWriter] = useState('');
  const [inputSubject, setInputSubject] = useState('');
  const [table, setTable] = useState([
    {
      index: '번호',
      subject: '제목',
      writer: '작성자',
    },
  ]);

  const addTable = () => {
    const newTable = table.concat({
      index: table.length,
      subject: inputSubject,
      writer: inputWriter,
    });

    setTable(newTable);
    setInputWriter('');
    setInputSubject('');
  };
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setInputWriter(e.target.value);
        }}
      />
      <input
        type="text"
        onChange={(e) => {
          setInputSubject(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.code === 'Enter') {
            addTable();
          }
        }}
      />
      <button onClick={addTable}>작성</button>
      <table>
        {table.map((cellValue) => {
          return (
            <tr>
              <td>{cellValue.index}</td>
              <td>{cellValue.subject}</td>
              <td>{cellValue.writer}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
