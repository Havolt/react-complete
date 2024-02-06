import { useRef } from 'react'

function Project({currentProject, updateCurrentProject}) {

  const taskRef = useRef();

  const handleAddTask = () => {
    const updatedProject = {...currentProject, tasks: [...currentProject.tasks, taskRef.current.value]}
    updateCurrentProject(updatedProject);
  }

  const clearTask = (index) => {
    const clonedTasks = [...currentProject.tasks];
    clonedTasks.splice(index, 1);

    const updatedProject = {...currentProject, tasks: clonedTasks}

    updateCurrentProject(updatedProject);
  }

  const monthsShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  const dateFull = new Date(currentProject.date);
  const dayOfMonth = dateFull.getDate();
  const month = dateFull.getMonth();
  const year = dateFull.getFullYear();

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
      <div>{}</div>
      <div>{`${dayOfMonth} ${monthsShort[month]}, ${year}`}</div>
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