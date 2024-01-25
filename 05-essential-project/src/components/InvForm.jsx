import React from 'react'

import InvInput from './InvInput'

function InvForm() {
  return (
    <form id="user-input">
      <div className="input-group">
        <InvInput
          inputLabel="Initial Investment"
          inputType="text"
          inputName="initial-investment"
        />
      
        <InvInput
          inputLabel="Annual Investment"
          inputName="annual-investment"
        />
       </div>
       <div className="input-group">
        <InvInput
          inputLabel="Expected Return"
          inputName="expected-return"
        />
        <InvInput
          inputLabel="Duration"
          inputName="duration"
        />
      </div>
    </form>
  )
}

export default InvForm