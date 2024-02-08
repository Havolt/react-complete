import { useRef } from 'react'
import { PAGE_TYPES } from '../utils/constants';

function CreateProject({updatePage, saveProject}) {

  const titleRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef();

  const handleCancel = () => {
    updatePage(PAGE_TYPES.DEFAULT);
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(dateRef.current.value);

    saveProject({
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      date: dateRef.current.value,
      tasks: [],
    })
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col'>
      <div className="flex gap-2 justify-end mr-2">
        <button className="" onClick={handleCancel}>Cancel</button>
        <button className="bg-black text-white p-1 rounded-md" type="submit">Save</button>
      </div>

      <label htmlFor="title">Title</label>
      <input type="text" name="title" id="title" ref={titleRef} />

      <label htmlFor="description">DESCRIPTION</label>
      <textarea name="description" id="description" cols="30" rows="10" ref={descriptionRef}></textarea>

      <label htmlFor="due-date">DUE DATE</label>
      <input type="datetime-local" name="due-date" ref={dateRef} />
    </form>
  )
}

export default CreateProject