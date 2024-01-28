import React from 'react'
import InvResultRow from './InvResultRow'

function InvResult({ investmentData, initialInvestment, annualInvestment }) {

  const interestPerYear = investmentData.map(data => data.interest)

  console.log(investmentData)
  console.log(interestPerYear)

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        { investmentData.map(data => {
          return <InvResultRow
            investment={data}
            initialInvestment={initialInvestment}
            annualInvestment={annualInvestment}
            totalInterest={interestPerYear.slice(0, data.year).reduce((partial, a) => partial + a, 0)}
            key={data.year}
          />
        })}
        
      </tbody>
    </table>
  )
}

export default InvResult