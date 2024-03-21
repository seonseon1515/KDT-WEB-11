import { useState } from 'react';

export default function Alphabet() {
  const [alphabet, setAlphabet] = useState(['b', 'a', 'n', 'n', 'a', 'n', 'a']);
  const [alphabet2, setAlphabet2] = useState([
    {
      id: 1,
      alpha: 'k',
    },
    {
      id: 2,
      alpha: 'i',
    },
    {
      id: 3,
      alpha: 'w',
    },
    {
      id: 4,
      alpha: 'i',
    },
  ]);

  const [inputAlpha, setInputAlpha] = useState('');
  const [alpha, setAlpha] = useState([]); // 단축평가용

  // const alphabets = alphabet.map((txt, id, arr) => {
  //   console.log('txt', txt);
  //   console.log('id', id); // index 번호
  //   console.log('arr', arr); //Alphabet 배열 전부 출력됨

  //   return txt + id;
  // });

  // console.log(alphabets);
  // concat:기존의 값을 새로운 내용 추가해서 반환한 값

  const addAlpha = () => {
    //[input]이 빈 값이라면 alphabet2 상태가 변경되지 않도록 하기
    // if 문 안되는 거 아님?
    if (inputAlpha.trim().length === 0) {
      return;
    }

    // alphabet2 에 inputalpha 내용을 추가
    const newAlpha = alphabet2.concat({
      id: alphabet2.length + 1,
      alpha: inputAlpha,
    });

    setAlphabet2(newAlpha);
    setInputAlpha('');
    // 값이 남아있지 않도록  빈값으로 초기화

    const handleKeydown = (e) => {
      // [퀴즈] 엔터 입력하면 추가되도록
      // 발생하는 이벤트에 대한 정보가 담겨있는 객체가 e?
      // 이벤트 핸들러 함수가 따로 있나? 아니면 모든 함수에서 활용할 수 있나?
      // console.log(e)
      // key, keycode, code 등 (e 안에 들어있는 키값 이용) 
      // if(e.keycode===13){
      //   addAlpha();
      // }
      if(e.code==='Enter'){
        addAlpha();
      }

      // bug fix: IME 문제 해결(한글 마지막 한글자가 더 나오는 문제)
      if(e.nativeEvent.isComposing){
        return;
      }
    };
  };

  const deleteAlpha = (id) => {
    console.log(id);
// 더블 클릭헀을 때 가져올 수 있는 id 값
    const newAlpha = alphabet2.filter((alpha)=>{
      return alpha.id!== id
    })
    setAlphabet2(newAlpha);
  }
  
  return (
    <div>
      {/* 화면에 그려보기 */}
      {/* value: 배열 요소 하나하나 */}
      {/* 키를 꼭 적어두는 습관 : 맵 효율적 사용! */}
      {/* 태그 하나일 때만 리턴 생략 가능한데 대신 소괄호로 감싸주어야 함.  */}
      <ol>
        {alphabet.map((value, idx) => {
          <li key={idx}>{value}</li>;
        })}

        {alphabet2.map((kiwi) => {
          <li key={kiwi.id} onDoubleClick={()=>{deleteAlpha(kiwi.id)}}>{kiwi.alpha}</li>;
        })}
      </ol>

      {/* value를 inputAlpha로 고정했기 때문에 치고 싶어도 안쳐짐, 내가 타자로 치는 값이 state에 반영이 되게끔 만들기 => onChange */}
      <input
        type="text"
        placeholder="알파벳 입력"
        value={inputAlpha}
        onChange={(e) => {
          setInputAlpha(e.target.value);
          // change 이벤트 발생을 할 때 state변수에도 변화를 주어서 변화가 눈에 보이게 함.
        }}
         // eslint-disable-next-line no-undef
         onKeyDown={(e) => {handleKeydown(e)}}
      />
      <button onClick={addAlpha}>Add</button>
      {/* 단축평가 */}
      {inputAlpha.length === 0 && <span>알파벳을 입력해주세요!</span>}
      <br />
      {'exist' || <span>정의된 값이 없어요!</span>}
      {null || <span>정의된 값이 없어요!</span>}
    </div>
  );
}
