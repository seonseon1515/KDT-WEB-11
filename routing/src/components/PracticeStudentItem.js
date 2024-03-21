import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'

// 프롭스를 다른 파일에서 전해주는데 받아오는 것을 어떻게 인식하는지에 대한 원리 알고 싶음
export default function PracticeStudentItem({student}) {
  const [searchParams,setSearchParams] = useSearchParams();
  const keyword = searchParams.get('studentId')
  return (
          <Link to={`/student/${student.studentId}`}>
          <ul>
            <li>학생의 번호는 {student.studentId} 입니다.</li>
            <li>학생의 이름은 {student.name}입니다. </li>

          </ul>
        </Link>
  )
}
// new일땐 나오고 null 일 땐 안나오게 단축평가 사용해서 구현