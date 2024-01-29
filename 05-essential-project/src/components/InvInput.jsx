import React from 'react'

function InvInput({inputType = 'number', inputName, inputLabel, onUpdate, inputValue}) {

  const handleUpdate = (event) => {
    const inputVal = event.target.value
    onUpdate(+inputVal)
  }

  return (
    <div>
        <label htmlFor={inputName}>{inputLabel}</label>
        <input type={inputType} name={inputName} value={inputValue} onChange={handleUpdate} />
    </div>
  )
}

export default InvInput