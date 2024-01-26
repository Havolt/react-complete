import InvHeader from './components/InvHeader';
import InvForm from './components/InvForm';
import InvResult from './components/InvResult';

import { useState } from 'react';

function App() {

  const [investmentData, setInvestmentData] = useState([]);

  return (
    <div className="app">
      <InvHeader />
      <InvForm />
      <InvResult investmentData={investmentData} />
    </div>
  )
}

export default App
