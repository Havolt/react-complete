import React from 'react'

import InvInput from './InvInput'

function InvForm() {
  return (
    <div>
      <InvInput
        inputLabel="Initial Investment" 
      />
      <InvInput
        inputLabel="Annual Investment"  
      />
      <InvInput
        inputLabel="Expected Return"  
      />
      <InvInput
        inputLabel="Duration"  
      />
    </div>
  )
}

export default InvForm