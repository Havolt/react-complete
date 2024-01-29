import React from 'react'

import InvInput from './InvInput'

function InvForm({ ...props}) {

  console.log(props.initialInvestment)

  return (
    <form id="user-input">
      <div className="input-group">
        <InvInput
          inputLabel="Initial Investment"
          inputName="initial-investment"
          inputValue={props.initialInvestment}
          onUpdate={props.updateInitial}
        />
        <InvInput
          inputLabel="Annual Investment"
          inputName="annual-investment"
          inputValue={props.expectedReturn}
          onUpdate={props.updateAnnual}
        />
       </div>
       <div className="input-group">
        <InvInput
          inputLabel="Expected Return"
          inputName="expected-return"
          inputValue={props.initialInvestment}
          onUpdate={props.updateReturn}
        />
        <InvInput
          inputLabel="Duration"
          inputName="duration"
          inputValue={props.duration}
          onUpdate={props.updateDuration}
        />
      </div>
    </form>
  )
}

export default InvForm