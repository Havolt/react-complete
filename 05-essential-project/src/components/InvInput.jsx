import React from 'react'

function InvInput({inputType = 'text', inputName, inputLabel}) {
  return (
    <div>
        <label htmlFor={inputName}>{inputLabel}</label>
        <input type={inputType} name={inputName} />
    </div>
  )
}

export default InvInput