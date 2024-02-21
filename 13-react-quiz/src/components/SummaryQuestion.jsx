import React from 'react'

function SummaryQuestion({questionText, userAnswer, isCorrect, index}) {

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
    <li>
        <h3>{index}</h3>
        <div className="question">{ questionText }</div>
        <div className={ answerClasses() }>{userAnswer || 'Unanswered'}</div>
    </li>
  )
}

export default SummaryQuestion