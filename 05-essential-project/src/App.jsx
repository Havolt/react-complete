import InvHeader from './components/InvHeader'
import InvForm from './components/InvForm'
import InvResult from './components/InvResult'

import { useState } from 'react'
import { calculateInvestmentResults } from './util/investment'

function App() {

  const [initialInvestment, setInitialInvestment] = useState(0);
  const [annualInvestment, setAnnualInvestment] = useState(0);
  const [expectedReturn, setExpectedReturn] = useState(0);
  const [duration, setDuration] = useState(0);

  const investmentData = calculateInvestmentResults({initialInvestment, annualInvestment, expectedReturn, duration})

  console.log(investmentData)

  const updateinitialInvestment = (newValue) => {
    setInitialInvestment(newValue)
  }

  const updateAnnualInvestment = (newValue) => {
    setAnnualInvestment(newValue)
  }

  const updateExpectedReturn = (newValue) => {
    setExpectedReturn(newValue)
  }

  const updateDuration = (newValue) => {
    setDuration(newValue)
  }

  return (
    <div className="app">
      <InvHeader />
      <InvForm 
        updateInitial={updateinitialInvestment}
        updateAnnual={updateAnnualInvestment}
        updateReturn={updateExpectedReturn}
        updateDuration={updateDuration}
      />
      <InvResult />
    </div>
  )
}

export default App
