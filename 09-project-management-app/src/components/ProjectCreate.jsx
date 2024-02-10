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

    if(titleRef.current.value < 1 || dateRef.current.value < 1) return;

    saveProject({
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      date: dateRef.current.value,
      tasks: [],
    })

    titleRef.current.value = ''
    descriptionRef.current.value =''
    dateRef.current.value = ''
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col max-w-3xl mt-6'>
      <div className="flex gap-2 justify-end">
        <button className="" onClick={handleCancel}>Cancel</button>
        <button className="bg-black text-white p-1 rounded-md" type="submit">Save</button>
      </div>

      <label className="font-bold" htmlFor="title">Title</label>
      <input className="bg-gray-200" type="text" name="title" id="title" ref={titleRef} />

      <label className="font-bold" htmlFor="description">DESCRIPTION</label>
      <textarea className="bg-gray-200 resize-none" name="description" id="description" cols="30" rows="5" ref={descriptionRef}></textarea>

      <label className="font-bold" htmlFor="due-date">DUE DATE</label>
      <input className="bg-gray-200" type="datetime-local" name="due-date" ref={dateRef} />
    </form>
  )
}

export default CreateProject