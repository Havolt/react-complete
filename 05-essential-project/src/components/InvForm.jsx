import React from 'react'

import InvInput from './InvInput'

function InvForm({ ...props}) {

  return (
    <form id="user-input">
      <div className="input-group">
        <InvInput
          inputLabel="Initial Investment"
          inputName="initial-investment"
          onUpdate={props.updateInitial}
        />
        <InvInput
          inputLabel="Annual Investment"
          inputName="annual-investment"
          onUpdate={props.updateAnnual}
        />
       </div>
       <div className="input-group">
        <InvInput
          inputLabel="Expected Return"
          inputName="expected-return"
          onUpdate={props.updateReturn}
        />
        <InvInput
          inputLabel="Duration"
          inputName="duration"
          onUpdate={props.updateDuration}
        />
      </div>
    </form>
  )
}

export default InvForm