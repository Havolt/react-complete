import { useState } from 'react'
import Question from './Question'
import Summary from './Summary'
import QUESTIONS from '../util/questions' // { id: 'q1', text: 'question text', answers: ['q', 'q', 'q', 'q'],}

function Quiz() {

  const [currentQuestion, setCurrentQuestion] = useState(null)
  const [userAnswers, setUserAnswers] = useState([])
  const [userResults, setUserResults] = useState({skipped: null, correct: null, incorrect: null})
  const [quizOver, setQuizOver] = useState(false)

  const startQuiz = () => {
    setCurrentQuestion(0);
  }

  const moveToNextQuestion = () => {
    if(currentQuestion === QUESTIONS.length-1) {
      setQuizOver(true)
      return
    }
    setCurrentQuestion(prevState => prevState + 1)
  }

  const updateUserAnswers = (latestAnswer) => {
    setUserAnswers(previousAnswers => [...previousAnswers, latestAnswer])
    moveToNextQuestion()
  }

  return (
    <>
      { !quizOver && <div id="quiz">
        { currentQuestion !== null && !quizOver &&  <Question currentQ={QUESTIONS[currentQuestion]} updateUserAnswers={updateUserAnswers} /> }
        { currentQuestion === null && !quizOver && <button onClick={startQuiz}>Start Quiz</button> }
      </div> }
      { quizOver && <Summary userAnswers={userAnswers} QUESTIONS={QUESTIONS} userResults={userResults} /> }
    </>
  )
}

export default Quiz