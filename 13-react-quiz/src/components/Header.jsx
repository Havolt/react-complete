import React from 'react'
import QuizLogo from '../assets/quiz-logo.png'

function Header() {
  return (
    <header>
      <img src={QuizLogo} alt="React quiz logo" />
      <h1>REACT QUIZ</h1>
    </header>
  )
}

export default Header