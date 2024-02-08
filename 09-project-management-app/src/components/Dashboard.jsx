import React from 'react'

import { PAGE_TYPES } from '../utils/constants';

function Dashboard({ projects, updatePage, updateSelectedProject }) {

  const handleAddProject = () => {
    updatePage(PAGE_TYPES.PROJECT_CREATE)
  }

  const handleSelectProject = (index) => {
    updatePage(PAGE_TYPES.PROJECT_INFO)
    updateSelectedProject(index)
  }

  return (
    <aside className="w-48 bg-black text-white rounded-tr-lg p-4 flex flex-col gap-3">
        <div className="font-bold">YOUR PROJECTS</div>
        <button className="bg-zinc-700 p-1 rounded-md" type="button" onClick={handleAddProject}>+ Add Project</button>
        <ul>
            { projects.map((project, index) => <li key={project.title}>
              <button onClick={() => handleSelectProject(index)} type="button">{project.title}</button>
            </li>)}
        </ul>
    </aside>
  )
}

export default Dashboard