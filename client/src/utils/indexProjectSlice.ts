import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import Project from '../types/ProjectType'


export interface IndexProject {
  indexProject: number | false;
}

const initialState: IndexProject = {
  indexProject: false,
}

export const indexProjectSlice = createSlice({
  name: 'indexProject',
  initialState,
  reducers: {
    setIndexProject: (state, action: PayloadAction<number>) => {
      state.indexProject = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setIndexProject } = indexProjectSlice.actions

export default indexProjectSlice.reducer