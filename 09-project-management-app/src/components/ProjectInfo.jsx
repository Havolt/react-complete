import React from 'react'

function Project({currentProject}) {

  return (
    <div>
      <div>
        <h1>{currentProject.title}</h1>
        <button>Delete</button>
      </div>
      <div>{currentProject.date}</div>
      <div>{currentProject.description}</div>
      <hr />
      <h2>Tasks</h2>
      <div>
        <input type="text" name="" id="" />
      </div>
      <div>
        <ul>
          { currentProject.tasks.length > 0 ? currentProject.tasks.map(task => <li key={task}>{task}</li>): null}
        </ul>
      </div>
    </div>
  )
}

export default Project