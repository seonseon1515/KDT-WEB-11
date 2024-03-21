import { useState } from 'react';
import MapPractice3 from './MapPractice3';

// export default function MapPractice4(){

//   return(
//     <div>
//       <select onChange={(e)=>{

//       }}>
//         <option value="all">작성자</option>
//         <option value="sub">제목</option>
//       </select>
      
//       <MapPractice3 />
      
//     </div>
//   )
// }



const Practice4 = () => {
  const [inputWriter, setInputWriter] = useState('') 
  const [inputTitle, setInputTitle] = useState('')
  const [inputSearch, setInputSearch] = useState('') //검색어
  const [comment, setComment] = useState([
    {
      writer: '민수',
      title: '안뇽',
    },
    {
      writer: '지민',
      title: '하이하이',
    },
    {
      writer: '희수',
      title: '멋쟁이',
    },
  ])
  const [result, setResult] = useState([])
  const [searchType, setSearchType] = useState('writer')

  const addComment = () => {
    let newComment = {
      writer: inputWriter,
      title: inputTitle,
    }

    // 스프레드 연산자를 이용해서 추가(concat 방법이 있음)
    // 배열에 객체 하나를 추가
    // ... 기존 값, 새로운 값을 추가(왼쪽이 객체 배열이니 우항도 객체 배열)
    setComment([...comment, newComment])
    setInputWriter('')
    setInputTitle('')
  }

  const searchComment = () => {
    let searchResult = comment.filter((item) => {
      // console.log(item); // comment에 대한 각 원소(객체)
      // console.log(item[searchType]); // 검색 조건(key)에 대한 value 값
      // console.log(item[searchType].includes(search)); // true or false

      // 검색결과 없음; null 반환
      // item이라는 객체에서 [searchType]이라는 키(writer, value)를 가지고 접근하려고
      if (!item[searchType].includes(inputSearch)) {
        return null
      }
      // 동일할 때만 나오지 않도록 include(포함하는 검색어가 있는지)
      // if(searchType === 'writer' && item.writer.includes(inputSearch)){
      //   // 작성자에서 검사
      //   return item;
      // } else if(searchType === 'title' && item.title``.includes(inputSearch)){
      //   return item;
      // } return null


      // 검색결과 있음; 검색결과(배열) 반환
      return item
    })

    // 검색 결과 state 설정
    setResult(searchResult)
    setInputSearch('')
  }

  const selectSearchType = (e) => {
    // console.log(e.target.value);
    // select option 상태 설정
    setSearchType(e.target.value)
  }

  return (
    <div>
      <form>
        <label htmlFor="wirter2">작성자:</label>
        <input
          id="wirter2"
          type="text"
          name="writer"
          value={inputWriter}
          onChange={(e) => setInputWriter(e.target.value)}
        />
        <label htmlFor="title2">제목:</label>
        <input
          id="title2"
          type="text"
          name="title"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
        />
        <button type="button" onClick={addComment}>
          작성
        </button>
      </form>

      <form>
        <select name="type" onChange={selectSearchType}>
          <option value="writer">작성자</option>
          <option value="title">제목</option>
        </select>

        <input
          type="text"
          name="search"
          placeholder="검색어"
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
        />
        <button type="button" onClick={searchComment}>
          검색
        </button>
      </form>

      <h3>전체 댓글 목록</h3>
      <table border={1} style={{ marginTop: '30px', width: '500px' }}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {comment.map((value, idx) => {
            return (
              <tr key={idx + 1}>
                <td>{idx + 1}</td>
                <td>{value.title}</td>
                <td>{value.writer}</td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <h3>댓글 검색 결과</h3>
      {result.length > 0 ? (
        <div>
          <table border={1} style={{ marginTop: '30px', width: '500px' }}>
            <thead>
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
              </tr>
            </thead>
            <tbody>
              {result.map((value, idx) => {
                return (
                  <tr key={idx + 1}>
                    <td>{idx + 1}</td>
                    <td>{value.title}</td>
                    <td>{value.writer}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <h5>검색 결과가 없습니다.</h5>
      )}
    </div>
  )
}

export default Practice4
