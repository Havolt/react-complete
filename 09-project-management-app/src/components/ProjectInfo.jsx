import { useRef } from 'react'

function Project({currentProject, updateCurrentProject}) {

  const taskRef = useRef();

  const handleAddTask = () => {
    const updatedProject = {...currentProject, tasks: [...currentProject.tasks, taskRef.current.value]}
    updateCurrentProject(updatedProject);
  }

  const clearTask = (index) => {
    console.log({index})
    console.log(currentProject.tasks)

    const clonedTasks = [...currentProject.tasks];
    clonedTasks.splice(index, 1);

    console.log(clonedTasks)

    const updatedProject = {...currentProject, tasks: clonedTasks}

    updateCurrentProject(updatedProject);
  }

  const taskElements = currentProject.tasks.length > 0 ? 
    currentProject.tasks.map((task, index) => (
      <li className="flex gap-20" key={task}>
        <span>{task}</ span>
        <button onClick={() => clearTask(index)}>Clear</button>
      </li>)) : null;

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
          { taskElements }
        </ul>
      </div>
    </div>
  )
}

export default Project