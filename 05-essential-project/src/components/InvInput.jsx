import React from 'react'

function InvInput({inputType = 'number', inputName, inputLabel, onUpdate}) {

  const handleUpdate = (event) => {
    const inputVal = event.target.value
    onUpdate(+inputVal)
  }

  return (
    <div>
        <label htmlFor={inputName}>{inputLabel}</label>
        <input type={inputType} name={inputName} onChange={handleUpdate} />
    </div>
  )
}

export default InvInput