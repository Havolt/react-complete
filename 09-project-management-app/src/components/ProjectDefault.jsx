import React from 'react'
import NoProjectsImg from "../assets/no-projects.png"

function ProjectDefault() {
  return (
    <div className="flex flex-col items-center gap-4">
      <img src={NoProjectsImg} alt="" className="w-16" />
      <h1 className="font-bold">No project selected</h1>
      <p>Select a project or get started with a new one</p>
      <button className="bg-black rounded-md text-white p-1">Create new project</button>
    </div>
  )
}

export default ProjectDefault