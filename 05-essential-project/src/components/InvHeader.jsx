import React from 'react'

import HeaderImage from '../assets/investment-calculator-logo.png'
import './InvHeader.css';

function InvHeader() {
  return (
    <div className="header">
      <picture className="header__logo">
        <img src={HeaderImage} alt="Investment Calculator Logo" />
      </picture>
      <h1 className="header__title">Investment Calculator</h1>
    </div>
  )
}

export default InvHeader