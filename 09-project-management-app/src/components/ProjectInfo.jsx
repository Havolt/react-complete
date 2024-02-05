import { useRef } from 'react'

function Project({currentProject, updateCurrentProject}) {

  const taskRef = useRef();

  const handleAddTask = () => {
    const updatedProject = {...currentProject, tasks: [...currentProject.tasks, taskRef.current.value]}
    updateCurrentProject(updatedProject);
  }

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
        <input type="text" ref={taskRef}/>
        <button onClick={handleAddTask}>Add Task</button>
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