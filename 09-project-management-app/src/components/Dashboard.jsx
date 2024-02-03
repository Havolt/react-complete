import React from 'react'

import { PAGE_TYPES } from '../utils/constants';

function Dashboard({ projects, updatePage }) {

  const handleAddProject = () => {
    updatePage(PAGE_TYPES.PROJECT_CREATE);
  }

  return (
    <aside>
        <div>YOUR PROJECTS</div>
        <button onClick={handleAddProject}>+ Add Project</button>
        <ul>
            { projects.map(project => <li key={project.title}>{project.title}</li>)}
        </ul>
    </aside>
  )
}

export default Dashboard