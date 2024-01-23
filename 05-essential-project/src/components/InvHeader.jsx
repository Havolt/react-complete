import React from 'react'

import HeaderImage from '../assets/investment-calculator-logo.png'
import './InvHeader.css';

function InvHeader() {
  return (
    <div class="header">
      <picture class="header__logo">
        <img src={HeaderImage} alt="Investment Calculator Logo" />
      </picture>
      <h1 class="header__title">Investment Calculator</h1>
    </div>
  )
}

export default InvHeader