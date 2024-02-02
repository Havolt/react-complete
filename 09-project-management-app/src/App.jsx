import { useState } from 'react';

import Dashboard from './components/Dashboard'
import Main from './components/Main'

import { PAGE_TYPES } from './utils/constants'

function App() {

  const [projects, setProjects] = useState(['test']);
  const [currentPage, setCurrentPage] = useState(PAGE_TYPES.DEFAULT)

  return (
    <>
      <Dashboard projects={projects} />
      <Main currentPage={currentPage} />
    </>
  );
}

export default App;
