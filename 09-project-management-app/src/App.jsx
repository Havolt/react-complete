import { useState, useRef } from 'react';

import Dashboard from './components/Dashboard'
import Main from './components/Main'

import { PAGE_TYPES } from './utils/constants'

const TEST_PROJECT = {
  title: 'Learning React',
  description: 'Learn React from the ground up.\n Start with the basics. Finish with advanced knowledge.',
  date: '2024-02-17T22:29',
  tasks: ['Learn the basics', 'Learn advanced concepts']
}

function App() {

  const [projects, setProjects] = useState([TEST_PROJECT])
  const [currentPage, setCurrentPage] = useState(PAGE_TYPES.DEFAULT)
  const [selectedProject, setSelectedProject] = useState(null)

  const updatePage = (page) => {
    if(PAGE_TYPES[page]) {
      setCurrentPage(page)
    }
  }

  const updateSelectedProject = (position) => {
    setSelectedProject(position)
  }

  const saveProject = (newProject) => {
    setProjects((oldProjects) => [...oldProjects, newProject])
  }

  const updateCurrentProject = (updatedProject) => {
    setProjects(prevState => {
      const oldState = [...prevState]
      oldState[selectedProject] = updatedProject
      return oldState;
    })
  }

  const deleteCurrentProject = () => {
    updatePage(PAGE_TYPES.DEFAULT)
    setProjects(prevState => {
      const currentProjects = [...prevState]
      currentProjects.splice(currentPage, 1)
      return currentProjects
    });
  }

  return (
      <div className='flex gap-10 min-h-screen mt-12'>
        <Dashboard
          updatePage={updatePage}
          projects={projects}
          updateSelectedProject={updateSelectedProject}
        />
        <Main
          currentPage={currentPage} 
          updatePage={updatePage}
          saveProject={saveProject}
          currentProject={typeof selectedProject === 'number' ? projects[selectedProject] : null}
          updateCurrentProject={updateCurrentProject}
          deleteCurrentProject={deleteCurrentProject}
        />
      </div>
  );
}

export default App;
