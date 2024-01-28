import React from 'react'
import InvResultRow from './InvResultRow'

function InvResult({ investmentData, initialInvestment, annualInvestment }) {

  const interestPerYear = investmentData.map(data => data.interest)
  const tableHeaders = ['Year', 'Investment Value', 'Interest (Year)', 'Total Interest', 'Invested Capital']

  return (
    <table id="result">
      <thead>
        <tr>
          { tableHeaders.map( header => <th key={header}>{header}</th> )}
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