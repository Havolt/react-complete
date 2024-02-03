import { useState, useRef } from 'react';

import Dashboard from './components/Dashboard'
import Main from './components/Main'

import { PAGE_TYPES } from './utils/constants'

const TEST_PROJECT = {
  title: 'Learning React',
  description: 'Learn React from the ground up.\n Start with the basics. Finish with advanced knowledge.',
  data: '2024-02-17T22:29',
  tasks: ['Learn the basics', 'Learn advanced concepts']
}

function App() {

  const [projects, setProjects] = useState([TEST_PROJECT]);
  const [currentPage, setCurrentPage] = useState(PAGE_TYPES.DEFAULT)

  const updatePage = (page) => {
    if(PAGE_TYPES[page]) {
      setCurrentPage(page);
    }
  }

  return (
    <div className='flex gap-10'>
      <Dashboard updatePage={updatePage} projects={projects} />
      <Main currentPage={currentPage} updatePage={updatePage} />
    </div>
  );
}

export default App;
