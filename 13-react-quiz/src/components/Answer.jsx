import React from 'react'

function Answer({answerText, updateUserAnswers, position}) {

  const handleSelectAnswer = () => {
    updateUserAnswers(position)
  }

  return (
    <div className="answer">
      <button onClick={ handleSelectAnswer }>{ answerText }</button>
    </div>
  )
}

export default Answer