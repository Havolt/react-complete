import { useState, useRef } from 'react';

import Dashboard from './components/Dashboard'
import Main from './components/Main'

import { PAGE_TYPES } from './utils/constants'

function App() {

  const [projects, setProjects] = useState(['test']);
  const [currentPage, setCurrentPage] = useState(PAGE_TYPES.DEFAULT)

  const updatePage = (page) => {
    if(PAGE_TYPES[page]) {
      setCurrentPage(page);
    }
  }

  return (
    <>
      <Dashboard updatePage={updatePage} projects={projects} />
      <Main currentPage={currentPage} />
    </>
  );
}

export default App;
