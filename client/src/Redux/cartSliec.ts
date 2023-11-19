import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ProductType } from '../types/ProductTypes';
import { CartItem } from '../types/CartTypes';


export interface CartLS {
  productId: ProductType;
  quantity: number;
}


export interface Cart {
  cartIndex: number;
  cart: CartItem[] | null
  cartLS: CartLS[] | null
}

const initialState: Cart = {
  cartIndex: 0,
  cart: null,
  cartLS: null,
}

export const cartIndexSlice = createSlice({
  name: 'cartIndex',
  initialState,
  reducers: {
    initialStateCart: (state) => {
      state.cartIndex = 0
      state.cart = null
    },
    incremntAmaount: (state) => {
      state.cartIndex++
    },
    insertDataToCart: (state, action: PayloadAction<CartItem[] | null>) => {

      if (action.payload) {
        console.log('This is an array of CartItem');
        state.cart = action.payload
        state.cartIndex = 0
        for (const cartitem of action.payload) {
          for (let i = 0; i < cartitem.quantity; i++) {
            state.cartIndex ++
          }
        }
        console.log('secsses');
      } else {
        const cartString = localStorage.getItem('CartLS');
        const cartLS = JSON.parse(cartString!) || [];
        state.cart = cartLS;
        console.log('ls louded into cert');
      }
      

    },
    addProductToCart: (state, action: PayloadAction<[ProductType, string | undefined]>) => {
      const userID = action.payload[1]
      const indexProduct = state.cart?.findIndex(cartitem => cartitem.productId._id === action.payload[0]._id)

      if (indexProduct !== undefined && indexProduct !== -1) {
        state.cart![indexProduct!].quantity++;
        state.cart![indexProduct!].price = state.cart![indexProduct!].price + action.payload[0].price;
        console.log(' product add quantity ');

      } else {
        if (state.cart) {
          state.cart.push({
            productId: action.payload[0],
            quantity: 1,
            price: action.payload[0].price,
            _id: '',
          })
          console.log(' product add to cart ');
        } else {
          state.cart = [{
            productId: action.payload[0],
            quantity: 1,
            price: action.payload[0].price,
            _id: '',
          }]
          console.log(' product add creat cart ');
        }
      }
      if (userID !== undefined) {
        console.log('product add db user ' + userID);
      } else {
        const cartString = JSON.stringify(state.cart);
        localStorage.setItem('CartLS', cartString);
        console.log('cart add ls');
      }
      state.cartIndex++
    },
    lessProductToCart: (state, action: PayloadAction<[ProductType, string | undefined]>) => {
      const userID = action.payload[1]
      const indexProduct = state.cart?.findIndex(cartitem => cartitem.productId._id === action.payload[0]._id)

      if (indexProduct !== undefined && indexProduct !== -1) {
        if (state.cart![indexProduct!].quantity > 1) {
          state.cart![indexProduct!].quantity--;
          state.cart![indexProduct!].price = state.cart![indexProduct!].price - action.payload[0].price;
          console.log(' product lestsd quantity ');
        } else {
          state.cart!.splice(indexProduct!, 1);
          console.log('product removed from cart');
        }
        state.cartIndex--
      } else {
        console.log(' product not found in cart ');
      }
      if (userID !== undefined) {
        console.log('product less db user ' + userID);
      } else {
        const cartString = JSON.stringify(state.cart);
        localStorage.setItem('CartLS', cartString);
        console.log('cart add ls');
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { lessProductToCart, addProductToCart, insertDataToCart, incremntAmaount, initialStateCart } = cartIndexSlice.actions

export default cartIndexSlice.reducer