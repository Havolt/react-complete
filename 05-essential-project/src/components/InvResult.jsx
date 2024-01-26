import React from 'react'
import InvResultRow from './InvResultRow'

function InvResult({investmentData}) {
  return (
    <table id="result">
      <thead>
        <th>Year</th>
        <th>Investment Value</th>
        <th>Interest (Year)</th>
        <th>Total Interest</th>
        <th>Invested Capital</th>
      </thead>
      <InvResultRow />
    </table>
  )
}

export default InvResult