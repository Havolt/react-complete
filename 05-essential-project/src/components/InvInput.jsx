import React from 'react'

function InvInput({inputType = 'number', inputName, inputLabel}) {
  return (
    <div className="input-section">
        <label htmlFor={inputName}>{inputLabel}</label>
        <input type={inputType} name={inputName} />
    </div>
  )
}

export default InvInput