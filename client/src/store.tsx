import { configureStore } from '@reduxjs/toolkit'
import projectsSlice from './utils/projectsSlice'
import indexProjectSlice from './utils/indexProjectSlice'

export const store = configureStore({
  reducer: {
    projects: projectsSlice,
    indexProject : indexProjectSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch