import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { getAllProduct } from '../api/cartFuncApi'; 
import { ProductType } from '../types/ProductTypes';


 
export interface CartIndex {
  cartIndex: number;
  cart: ProductType[] | null
}

const initialState: CartIndex = {
  cartIndex: 5,
  cart: null
}

export const cartIndexSlice = createSlice({
  name: 'cartIndex',
  initialState,
  reducers: {
    insertCart: (state, action: PayloadAction<any>) => {
        state.cart = action.payload
        console.log(state.cart);
      
    
    },
    setCart: (state, action: PayloadAction<number>) => {
      state.cartIndex = action.payload
    },
    incrementToCart: (state,) => {
      state.cartIndex += 1 
    },
  },
})

// Action creators are generated for each case reducer function
export const { setCart, incrementToCart, insertCart } = cartIndexSlice.actions

export default cartIndexSlice.reducer