import React from 'react'
import Answer from './Answer'

// currentQ: { id = string; text = string; answers = string[] }
function Question({currentQ, updateUserAnswers}) {

  

  return (
    <div>
      <h2 id="question">{ currentQ.text }</h2>

      <div id="answers">
        { currentQ.answers.map((answer, ind) => <Answer key={answer} answerText={answer} updateUserAnswers={updateUserAnswers} position={ind}  />) }
      </div>
      
    </div>
  )
}

export default Question