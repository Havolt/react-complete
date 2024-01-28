import React from 'react'

import { formatter } from '../util/investment'

function InvResultRow({ investment, initialInvestment, annualInvestment, totalInterest }) {

  const investedCapital = initialInvestment + (annualInvestment * investment.year)
  const formattedInvestedCapital = formatter.format(investedCapital)

  return (
    <tr>
        <td>{ investment.year }</td>
        <td>{ formatter.format(investment.valueEndOfYear) }</td>
        <td>{formatter.format(investment.interest)}</td>
        <td>{ formatter.format(totalInterest) }</td>
        <td>{ formattedInvestedCapital }</td>
    </tr>
  )
}

export default InvResultRow