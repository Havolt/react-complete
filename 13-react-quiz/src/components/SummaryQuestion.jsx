import React from 'react'

function SummaryQuestion({questionText, userAnswer, isCorrect}) {

  const answerClasses = () => {
    let extraClass;
    if(userAnswer === null) {
      extraClass = 'skipped'
    } else if(isCorrect) {
      extraClass = 'correct'
    } else {
      extraClass = 'wrong'
    }

    return `user-answer ${extraClass}`
  }

  return (
    <div>
        <div className="question">{ questionText }</div>
        <div className={ answerClasses() }>{userAnswer}</div>
    </div>
  )
}

export default SummaryQuestion