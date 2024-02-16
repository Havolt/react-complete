import { useState } from 'react'
import Question from './Question'
import Summary from './Summary'
import QUESTIONS from '../util/questions'

function Quiz() {

  const [currentQuestion, setCurrentQuestion] = useState(null)

  return (
    <div>
      { currentQuestion !== null && <Question currentQ={QUESTIONS[currentQuestion]} /> }
      <Summary />
    </div>
  )
}

export default Quiz