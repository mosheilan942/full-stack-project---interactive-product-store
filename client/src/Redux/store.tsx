import { configureStore } from '@reduxjs/toolkit'
import cartIndexSlice from './cartIndexSlice'

export const store = configureStore({
  reducer: {
    cartIndex : cartIndexSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch