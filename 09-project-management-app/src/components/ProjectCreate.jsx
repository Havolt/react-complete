import React from 'react'

import { PAGE_TYPES } from '../utils/constants';

function CreateProject({updatePage}) {

  const handleCancel = () => {
    updatePage(PAGE_TYPES.DEFAULT);
  }

  return (
    <form className='flex flex-col'>
      <button onClick={handleCancel}>Cancel</button>
      <button>Save</button>

      <label htmlFor="title">Title</label>
      <input type="text" name="title" id="title" />

      <label htmlFor="description">DESCRIPTION</label>
      <textarea name="description" id="description" cols="30" rows="10"></textarea>

      <label htmlFor="due-date">DUE DATE</label>
      <input type="time" name="due-date" id="" />
    </form>
  )
}

export default CreateProject