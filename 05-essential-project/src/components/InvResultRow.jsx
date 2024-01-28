import React from 'react'

import { formatter } from '../util/investment'

function InvResultRow({ investment, initialInvestment, annualInvestment }) {

  const investedCapital = initialInvestment + (annualInvestment * investment.year)
  const formattedInvestedCapital = formatter.format(investedCapital)

  return (
    <tr>
        <td>{ investment.year }</td>
        <td>{ formatter.format(investment.valueEndOfYear) }</td>
        <td>{formatter.format(investment.interest)}</td>
        <td>placeholder</td>
        <td>{ formattedInvestedCapital }</td>
    </tr>
  )
}

export default InvResultRow