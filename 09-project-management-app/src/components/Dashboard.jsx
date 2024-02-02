import React from 'react'

function Dashboard({ projects }) {
  return (
    <aside>
        <div>YOUR PROJECTS</div>
        <button>+ Add Project</button>
        <ul>
            { projects.map(project => <li key={project}>{project}</li>)}
        </ul>
    </aside>
  )
}

export default Dashboard