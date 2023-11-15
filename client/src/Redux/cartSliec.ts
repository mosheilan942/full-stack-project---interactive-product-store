import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { getAllProduct } from '../api/cartFuncApi'; 
import { ProductType } from '../types/ProductTypes';
import { Cart } from '../types/CartTypes';


 
export interface CartIndex {
  cartIndex: number;
  cart: Cart | null
}

const initialState: CartIndex = {
  cartIndex: 5,
  cart: null
}

export const cartIndexSlice = createSlice({
  name: 'cartIndex',
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<any>) => {
      
        state.cart?.push(action.payload)
        console.log(state.cart);
    },
    // getQuantityForProduct: (state) => {
    //   return state.cartIndex
    // },
    incrementToCart: (state, action: PayloadAction<string>) => {
      state.cartIndex += 1 
    },

    lessToCart: (state, action: PayloadAction<string>) => {
      state.cart?.forEach((orderItem) => {
        if (orderItem.productId._id === action.payload) {
          orderItem.quantity += 1
      }})
      if (state.cartIndex > 0) {
      state.cartIndex -= 1 
      }
      
    },
  },
})

// Action creators are generated for each case reducer function
export const {  incrementToCart, addProductToCart, lessToCart } = cartIndexSlice.actions

export default cartIndexSlice.reducer