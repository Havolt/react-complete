import React from 'react'
import NoProjectsImg from "../assets/no-projects.png"
import { PAGE_TYPES } from '../utils/constants';

function ProjectDefault({updatePage}) {

  const handleCreateProject = () => {
    updatePage(PAGE_TYPES.PROJECT_CREATE)
  }

  return (
    <div className="mx-auto flex flex-col items-center gap-4 mt-20">
      <img src={NoProjectsImg} alt="" className="w-16" />
      <h1 className="font-bold">No project selected</h1>
      <p>Select a project or get started with a new one</p>
      <button onClick={handleCreateProject} className="bg-black rounded-md text-white p-1">Create new project</button>
    </div>
  )
}

export default ProjectDefault