import React from 'react'

function SummaryPercent({resultText, resultPercent}) {
  return (
    <div>
        <p className="number">{resultPercent}%</p>
        <p className="text">{resultText}</p>
    </div>
  )
}

export default SummaryPercent