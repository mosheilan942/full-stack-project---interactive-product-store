import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


 
export interface CartIndex {
  cart: number;
}

const initialState: CartIndex = {
  cart: 0,
}

export const cartIndexSlice = createSlice({
  name: 'cartIndex',
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<number>) => {
      state.cart = action.payload
    },
    incrementToCart: (state,) => {
      state.cart += 1 
    },
  },
})

// Action creators are generated for each case reducer function
export const { setCart, incrementToCart } = cartIndexSlice.actions

export default cartIndexSlice.reducer