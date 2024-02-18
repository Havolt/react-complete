import React from 'react'

function SummaryQuestion({questionText, userAnswer, isCorrect}) {
  return (
    <div>
        <p>{questionText}</p>
        <p>{userAnswer}</p>
    </div>
  )
}

export default SummaryQuestion