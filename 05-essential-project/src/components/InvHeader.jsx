import React from 'react'

import HeaderImage from '../assets/investment-calculator-logo.png'

function InvHeader() {
  return (
    <div id="header">
      <picture >
        <img src={HeaderImage} alt="Investment Calculator Logo" />
      </picture>
      <h1>Investment Calculator</h1>
    </div>
  )
}

export default InvHeader