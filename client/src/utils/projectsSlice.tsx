import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import Project from '../types/ProjectType'

import {
  project1,
  project2,
  project3,
  project4
} from '../db/dbDefult'

export interface ProjectState {
  Projects: Project[];
}

const initialState: ProjectState = {
  Projects: [project1, project2, project3, project4],
}

export const ProjectsSlice = createSlice({
  name: 'indexProject',
  initialState,
  reducers: {
    createNewProject: (state, action: PayloadAction<string>) => {
      const newProject = {
        name: action.payload,
        tasks: []
      }
      const projects = [...state.Projects , newProject]
      state.Projects = projects
    },
  },
})

// Action creators are generated for each case reducer function
export const { createNewProject } = ProjectsSlice.actions

export default ProjectsSlice.reducer