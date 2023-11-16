import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSliec'
import userSlice from './userSlice'
import comparisonSlice from './comparisonSlice'


export const store = configureStore({
  reducer: {
    cart : cartSlice,
    user : userSlice,
    comparison : comparisonSlice,
    
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch