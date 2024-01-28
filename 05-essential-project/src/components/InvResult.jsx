import React from 'react'
import InvResultRow from './InvResultRow'

function InvResult({ investmentData, initialInvestment, annualInvestment }) {

  console.log(investmentData)

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
            key={data.year} 
          />
        })}
        
      </tbody>
    </table>
  )
}

export default InvResult