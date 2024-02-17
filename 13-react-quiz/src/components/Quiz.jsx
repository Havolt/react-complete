import { useState } from 'react'
import Question from './Question'
import Summary from './Summary'
import QUESTIONS from '../util/questions'

function Quiz() {

  const [currentQuestion, setCurrentQuestion] = useState(null)
  const [quizOver, setQuizOver] = useState(false)

  const startQuiz = () => {
    setCurrentQuestion(0);
  }

  const moveToNextQuestion = () => {
    setCurrentQuestion(prevState => {
      return prevState + 1 < QUESTIONS.length ? prevState + 1 : prevState;
    })
  }

  return (
    <div>
      { currentQuestion !== null ? 
        <Question currentQ={QUESTIONS[currentQuestion]} /> : 
        <button onClick={startQuiz}>Start Quiz</button> }
      { quizOver && <Summary /> }
    </div>
  )
}

export default Quiz