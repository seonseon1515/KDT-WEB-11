import React from 'react'
import {Link} from 'react-router-dom'

// 링크 태그도 새로고침 없이 경로만 바꿔줌
export default function Header() {
  return (
    <header>
      <h1>Router Tutorial</h1>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li>
          <Link to='/products'>Products</Link>
        </li>
      </ul>
    </header>
  )
}
