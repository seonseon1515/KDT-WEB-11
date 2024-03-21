import React from 'react'
import grass from './grass.png'
import './styles/StyledPractice1.scss'

export default function StyledPractice1() {
  return (
    <div className="larva">
      <div className="body body1">
        <div className="eye eye-white">
          <div className="eye eye-black"></div>
        </div>
      </div>
      <div className="body body2"></div>
      <div className="body body3"></div>
      <div className="body body4"></div>
      <div className="body body5"></div>

      {/*  process.env.PUBLIC_URL: /public 폴더 경로 */}
      <img
        className="grass"
        src={grass}
        alt="잔디"/>
    </div>
  )
}
