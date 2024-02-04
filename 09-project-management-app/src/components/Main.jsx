import React from 'react'

import ProjectDefault from './ProjectDefault'
import ProjectCreate from './ProjectCreate'
import ProjectInfo from './ProjectInfo'

import { PAGE_TYPES } from '../utils/constants'

function Main({currentPage, updatePage, saveProject, currentProject}) {

  return (
    <div>
        { currentPage === PAGE_TYPES.DEFAULT && <ProjectDefault /> }
        { currentPage === PAGE_TYPES.PROJECT_CREATE && <ProjectCreate updatePage={updatePage} saveProject={saveProject} /> }
        { currentPage === PAGE_TYPES.PROJECT_INFO && <ProjectInfo currentProject={currentProject} /> }
    </div>
  )
}

export default Main