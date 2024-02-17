import React from 'react'
import Answer from './Answer'

// currentQ: { id = string; text = string; answers = string[] }
function Question({currentQ, moveToNextQuestion}) {
  return (
    <div>
      <h2 id="question">{ currentQ.text }</h2>

      {currentQ.answers.map(answer => <Answer key={answer} answerText={answer} />)}
      
    </div>
  )
}

export default Question