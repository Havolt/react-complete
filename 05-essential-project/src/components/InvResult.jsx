import React from 'react'
import InvResultRow from './InvResultRow'

function InvResult({investmentData}) {
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
        <InvResultRow />
      </tbody>
    </table>
  )
}

export default InvResult