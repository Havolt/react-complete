import InvHeader from './components/InvHeader'
import InvForm from './components/InvForm'
import InvResult from './components/InvResult'

import { useState } from 'react';

function App() {

  const [investmentInitial, setInvestmentInitial] = useState(0);
  const [investmentAnnual, setInvestmentAnnual] = useState(0);
  const [investmentReturn, setInvestmentReturn] = useState(0);
  const [investmentDuration, setInvestmentDuration] = useState(0);

  const updateInvestmentInitial = (newValue) => {
    console.log('Initial')
    setInvestmentInitial(newValue)
  }

  const updateInvestmentAnnual = (newValue) => {
    console.log('Annual')
    setInvestmentAnnual(newValue)
  }

  const updateInvestmentReturn = (newValue) => {
    console.log('Return')
    setInvestmentReturn(newValue)
  }

  const updateInvestmentDuration = (newValue) => {
    console.log('Duration')
    setInvestmentDuration(newValue)
  }

  return (
    <div className="app">
      <InvHeader />
      <InvForm 
        updateInitial={updateInvestmentInitial}
        updateAnnual={updateInvestmentAnnual}
        updateReturn={updateInvestmentReturn}
        updateDuration={updateInvestmentDuration}
      />
      <InvResult />
    </div>
  )
}

export default App
