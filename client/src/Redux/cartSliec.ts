import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ProductType } from '../types/ProductTypes';
import { CartItem } from '../types/CartTypes';
import { getAllProductFromCart, getProductByID } from '../api/cartFuncApi';
import axios from 'axios';




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
    insertDataToCart: (state,action: PayloadAction<CartItem[] | null>) => {
      const userID = localStorage.getItem('UserClientID');
      if (userID) {
            console.log(state.cartIndex);     
            state.cart = action.payload
            console.log('secsses');
      } else {
        const cartString = localStorage.getItem('CartLS');
        const cartLS: CartLS[] = JSON.parse(cartString!)
        state.cartLS = cartLS
      }

    },
    addProductToCart: (state, action: PayloadAction<ProductType>) => {
      const userID = localStorage.getItem('UserClientID');
      if (userID) {
        let config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: `http://localhost:3000/category/Cart/Add/${userID}/${action.payload._id}`,
          headers: {}
        };
        axios.request(config)
          .then((response) => {
            // console.log('add secses'+JSON.stringify(response.data));

            console.log('state.cartIndex' + state.cartIndex);
            state.cartIndex++
            console.log(state.cartIndex);
          })
          .catch((error) => {
            console.log('err' + error);
          });
      } else {
        const cartLS = localStorage.getItem('CartLS');
        if (cartLS) {
          const cart: CartLS[] = JSON.parse(cartLS)
          const productToUpdateIndex = cart.findIndex(item => item.productId._id === action.payload._id);
          if (productToUpdateIndex >= 0) {
            cart[productToUpdateIndex].quantity++;
            console.log('product To Update add acsses');
          } else {
            cart.push({
              productId: action.payload,
              quantity: 1
            })
            console.log('product To Update acsses add firt 1');
          }
          state.cartLS = cart
        } else {
          state.cartLS = [{
            productId: action.payload,
            quantity: 1
          }]
        }
        state.cartIndex += 1
        const cartToString = JSON.stringify(state.cartLS)
        localStorage.setItem('CartLS', cartToString)
      }
    },
    lessProductToCart: (state, action: PayloadAction<ProductType>) => {
      const userID = localStorage.getItem('UserClientID');
      if (userID) {
        let config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: `http://localhost:3000/category/Cart/lower/${userID}/${action.payload._id}`,
          headers: {}
        };
        axios.request(config)
          .then((response) => {
            console.log('lower secses' + JSON.stringify(response.data));
            state.cartIndex--
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        const cartLS = localStorage.getItem('CartLS');
        if (cartLS) {
          const cart: CartItem[] = JSON.parse(cartLS)
          const productToUpdateIndex = cart.findIndex(item => item.productId._id === action.payload._id);

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
export const { lessProductToCart, addProductToCart, insertDataToCart } = cartIndexSlice.actions

export default cartIndexSlice.reducer