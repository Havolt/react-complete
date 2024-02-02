import { useState } from 'react';

import Dashboard from './components/Dashboard'
import Main from './components/Main'

function App() {

  const [projects, setProjects] = useState(['test']);

  return (
    <>
      <Dashboard projects={projects} />
      <Main />
    </>
  );
}

export default App;
