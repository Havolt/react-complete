import React from 'react'
import SummaryQuestion from './SummaryQuestion'
import QuizComplete from '../assets/quiz-complete.png'

function Summary({ userAnswers, QUESTIONS }) {

  // Map through all the questions and answers and show results
  const summaryQuestions = userAnswers.map(
      (answer, ind) => (
        <SummaryQuestion 
          key={QUESTIONS[ind].text} 
          questionText={QUESTIONS[ind].text} 
          userAnswer={QUESTIONS[ind].answers[answer]} 
          isCorrect={answer === QUESTIONS[ind].correct} 
          index={ind+1} 
        />
      )
  )

  return (
    <div id="summary">
      <img src={QuizComplete} alt="Quiz Complete Trophy" />
      <h2>Quiz Completed!</h2>
      <hr />

      <ol>
        { summaryQuestions }
      </ol>
    </div>
  )
}

export default Summary