import React from 'react'

import ProjectDefault from './ProjectDefault'
import ProjectCreate from './ProjectCreate'
import ProjectInfo from './ProjectInfo'

import { PAGE_TYPES } from '../utils/constants'

function Main({currentPage, updatePage, saveProject, currentProject, updateCurrentProject}) {

  return (
    <div className="flex-grow">
        { currentPage === PAGE_TYPES.DEFAULT && <ProjectDefault updatePage={updatePage} /> }
        { currentPage === PAGE_TYPES.PROJECT_CREATE && <ProjectCreate updatePage={updatePage} saveProject={saveProject} /> }
        { currentPage === PAGE_TYPES.PROJECT_INFO && <ProjectInfo currentProject={currentProject} updateCurrentProject={updateCurrentProject} /> }
    </div>
  )
}

export default Main