import React from 'react'
import Answer from './Answer'

// currentQ: { id = string; text = string; answers = string[] }
function Question({currentQ}) {
  return (
    <div>
      <h2 id="question">{ currentQ.text }</h2>
      <Answer />
    </div>
  )
}

export default Question