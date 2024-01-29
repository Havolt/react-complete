import InvHeader from './components/InvHeader'
import InvForm from './components/InvForm'
import InvResult from './components/InvResult'

import { useState } from 'react'
import { calculateInvestmentResults } from './util/investment'

function App() {

  const [initialInvestment, setInitialInvestment] = useState(10000);
  const [annualInvestment, setAnnualInvestment] = useState(600);
  const [expectedReturn, setExpectedReturn] = useState(5);
  const [duration, setDuration] = useState(0);

  const investmentData = calculateInvestmentResults({initialInvestment, annualInvestment, expectedReturn, duration})

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
        initialInvestment={initialInvestment}
        annualInvestment={annualInvestment}
        expectedReturn={expectedReturn}
        duration={duration}
      />
      <InvResult
        investmentData={investmentData}
        initialInvestment={initialInvestment}
        annualInvestment={annualInvestment}
      />
    </div>
  )
}

export default App
