import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ProductType } from '../types/ProductTypes';
import { CartItem } from '../types/CartTypes';
import { getAllProductFromCart } from '../api/cartFuncApi';


export interface CartLS {
  productId: string;
  quantity: number;
}


export interface Cart {
  cartIndex: number;
  cart: CartItem[] | CartLS[] | null
}

const initialState: Cart = {
  cartIndex: 0,
  cart: null
}

export const cartIndexSlice = createSlice({
  name: 'cartIndex',
  initialState,
  reducers: {
    insertDataToCart: (state,) => {
      const userID = localStorage.getItem('UserClientID');
      
      
      if (userID) {
        const getCartFromServer = async () => {
          const cart : CartItem[]= await getAllProductFromCart(userID)
          console.log(cart);
          
        };
        getCartFromServer()
      } else {
        
        const cartLS = localStorage.getItem('CartLS');
        const cart: CartLS[] = JSON.parse(cartLS!)
        state.cartIndex = 0
        cart.forEach(cartItem => {
          state.cartIndex += cartItem.quantity
        })
        state.cart = cart
      } 
     
    },
    addProductToCart: (state, action: PayloadAction<string>) => {
      const userID = localStorage.getItem('UserClientID');
      if (userID) {
        // fech ....
      } else {
        const cartLS = localStorage.getItem('CartLS');
        if (cartLS) {
          const cart: CartLS[] = JSON.parse(cartLS)
          const productToUpdateIndex = cart.findIndex(item => item.productId === action.payload);
          if (productToUpdateIndex >= 0) {    
            cart[productToUpdateIndex].quantity++;
          } else {
            console.log(2);
            
            cart.push({
              productId: action.payload,
              quantity: 1
            })
          }
          state.cart = cart
        } else {
          state.cart = [{
            productId: action.payload,
            quantity: 1
          }]
        }
        state.cartIndex += 1
        const cartToString = JSON.stringify(state.cart)
        localStorage.setItem('CartLS', cartToString)
      }
    },
    lessProductToCart: (state, action: PayloadAction<string>) => {
      const userID = localStorage.getItem('UserClientID');
      if (userID) {
        // fech ....
      } else {
        const cartLS = localStorage.getItem('CartLS');
        if (cartLS) {
          const cart: CartLS[] = JSON.parse(cartLS)
          const productToUpdateIndex = cart.findIndex(item => item.productId === action.payload);
          
          if (productToUpdateIndex >= 0) {
            cart[productToUpdateIndex].quantity--;

            if (cart[productToUpdateIndex].quantity <= 0) {
              // Remove product if quantity is 0
              cart.splice(productToUpdateIndex, 1);
            }

          }
          state.cart = cart;
          const cartToString = JSON.stringify(state.cart)
          localStorage.setItem('CartLS', cartToString)
        }
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { lessProductToCart, addProductToCart, insertDataToCart} = cartIndexSlice.actions

export default cartIndexSlice.reducer