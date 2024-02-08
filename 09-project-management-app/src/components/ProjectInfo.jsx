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
      <li className="flex gap-20 justify-between" key={task}>
        <span>{task}</ span>
        <button onClick={() => clearTask(index)}>Clear</button>
      </li>)) : null;

  return (
    <div className="max-w-3xl">
      <div className="flex justify-between">
        <h1 className="text-2xl">{currentProject.title}</h1>
        <button>Delete</button>
      </div>
      <div className="mb-2">{`${dayOfMonth} ${monthsShort[month]}, ${year}`}</div>
      <h2 className="text-xl border-t-4 mt-2 mb-2">Tasks</h2>
      <div className="mb-4 flex gap-4">
        <input className="bg-gray-200" type="text" ref={taskRef}/>
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <div className="w-full bg-gray-200">
        <ul className="p-2">
          { taskElements }
        </ul>
      </div>
    </div>
  )
}

export default Project