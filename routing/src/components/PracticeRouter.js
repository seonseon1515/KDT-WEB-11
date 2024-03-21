import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/practiceRouting.scss'

export default function PracticeRouter() {
  return (
    <div className='bg'>
      <Link to='/'>
        <h2>PracticeRouter 실습(헤더 - 이동링크 설정 페이지)</h2>
      </Link>
      <nav>
        <ul>
          <li className='link student'>
            <Link to='/student/kdt'>학생 KDT</Link>
          </li>
          <li className='link codingon'>
            <Link to='/student/codingon'>코딩온</Link>
          </li>
          <li className='link params'>
            <Link to='/student/new?name=kdt3rd'>searchParams</Link>
            {/* new라는 값이  */}
            </li>
        </ul>
      </nav>
    </div>
  )
}
