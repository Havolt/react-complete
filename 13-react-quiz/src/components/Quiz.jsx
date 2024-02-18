import { useState } from 'react'
import Question from './Question'
import Summary from './Summary'
import QUESTIONS from '../util/questions'

function Quiz() {

  const [currentQuestion, setCurrentQuestion] = useState(null)
  const [userAnswers, setUserAnswers] = useState([])
  const [quizOver, setQuizOver] = useState(false)

  const startQuiz = () => {
    setCurrentQuestion(0);
  }

  const moveToNextQuestion = () => {
    setCurrentQuestion(prevState => {
      return prevState + 1 < QUESTIONS.length ? prevState + 1 : prevState
    })
  }

  const updateUserAnswers = (latestAnswer) => {
    setUserAnswers(previousAnswers => [...previousAnswers, latestAnswer])
    moveToNextQuestion()
  }

  return (
    <div id="quiz">
      { currentQuestion !== null ? 
        <Question currentQ={QUESTIONS[currentQuestion]} updateUserAnswers={updateUserAnswers} /> : 
        <button onClick={startQuiz}>Start Quiz</button> }
      { quizOver && <Summary /> }
    </div>
  )
}

export default Quiz