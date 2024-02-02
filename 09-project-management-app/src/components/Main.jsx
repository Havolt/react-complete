import React from 'react'

import ProjectDefault from './ProjectDefault'
import ProjectCreate from './ProjectCreate'
import ProjectInfo from './ProjectInfo'

import { PAGE_TYPES } from '../utils/constants'

function Main({currentPage}) {

  return (
    <div>
        { currentPage === PAGE_TYPES.DEFAULT && <ProjectDefault /> }
        { currentPage === PAGE_TYPES.PROJECT_CREATE && <ProjectCreate /> }
        { currentPage === PAGE_TYPES.PROJECT_INFO && <ProjectInfo /> }
    </div>
  )
}

export default Main