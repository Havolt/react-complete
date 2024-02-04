import React from 'react'

import ProjectDefault from './ProjectDefault'
import ProjectCreate from './ProjectCreate'
import ProjectInfo from './ProjectInfo'

import { PAGE_TYPES } from '../utils/constants'

function Main({currentPage, updatePage, saveProject}) {

  return (
    <div>
        { currentPage === PAGE_TYPES.DEFAULT && <ProjectDefault /> }
        { currentPage === PAGE_TYPES.PROJECT_CREATE && <ProjectCreate updatePage={updatePage} saveProject={saveProject} /> }
        { currentPage === PAGE_TYPES.PROJECT_INFO && <ProjectInfo /> }
    </div>
  )
}

export default Main