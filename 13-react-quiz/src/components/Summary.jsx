import React from 'react'
import SummaryQuestion from './SummaryQuestion'
import SummaryPercent from './SummaryPercent'
import QuizComplete from '../assets/quiz-complete.png'

const RESULT_TEXT = {
  SKIPPED: 'SKIPPED',
  CORRECT: 'ANSWERED CORRECTLY',
  INCORRECT: 'ANSWERED INCORRECTLY',
}

function Summary({ userAnswers, userResults, QUESTIONS }) {

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

      <div id="summary-stats">
        <SummaryPercent resultText={RESULT_TEXT.SKIPPED} resultPercent={userResults.skipped} />
        <SummaryPercent resultText={RESULT_TEXT.CORRECT} resultPercent={userResults.correct} />
        <SummaryPercent resultText={RESULT_TEXT.INCORRECT} resultPercent={userResults.incorrect} />
      </div>

      <ol>
        { summaryQuestions }
      </ol>
    </div>
  )
}

export default Summary