import React from 'react'

import InvInput from './InvInput'

function InvForm() {
  return (
    <form>
      <InvInput
        inputLabel="Initial Investment"
        inputType="text"
        inputName="initial-investment"
      />
      <InvInput
        inputLabel="Annual Investment"
        inputName="annual-investment"
      />
      <InvInput
        inputLabel="Expected Return"
        inputName="expected-return"
      />
      <InvInput
        inputLabel="Duration"
        inputName="duration"
      />
    </form>
  )
}

export default InvForm