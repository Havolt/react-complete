import { useState, useEffect, createRef } from 'react'
import Answer from './Answer'

const MAX_TIME = 5000
const TIME_PERCENT = 50

// currentQ: { id = string; text = string; answers = string[] }
function Question({currentQ, updateUserAnswers}) {

  const [timeRemaining, setTimeRemaining] = useState(0)
  const [timePercent, setTimePercent] = useState(100)

  let timeoutID;

  useEffect(() => {
    timeoutID = window.setTimeout(() => {
      console.log(timeRemaining)
      if(timeRemaining < MAX_TIME) {
        setTimeRemaining(prevTime => prevTime + 50)
        setTimePercent((prevPercent) => prevPercent - 1 )
      } else {
        resetTimers();
        updateUserAnswers(null)
      }
    }, TIME_PERCENT);

    return () => window.clearTimeout(timeoutID )
  }, [timeRemaining]);

  const submitAnswer = (position) => {
    resetTimers();
    updateUserAnswers(position);
  }

  const resetTimers = () => {
    window.clearTimeout(timeoutID)
    setTimeRemaining(0)
    setTimePercent(100)
  }
  

  return (
    <div id="question">
      <progress className="progress" value={timePercent} max="100"></progress>
      <h2>{ currentQ.text }</h2>

      <div id="answers">
        { currentQ.answers.map((answer, ind) => <Answer key={answer} answerText={answer} updateUserAnswers={submitAnswer} position={ind}  />) }
      </div>
      
    </div>
  )
}

export default Question