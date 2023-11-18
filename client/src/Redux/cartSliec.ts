import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ProductType } from '../types/ProductTypes';
import { CartItem } from '../types/CartTypes';
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
    setAmaount: (state, action: PayloadAction<number>) => {
      state.cartIndex = action.payload
    },
    insertDataToCart: (state, action: PayloadAction<CartItem[] | null>) => {

      if (action.payload) {
        console.log(state.cartIndex);
        state.cart = action.payload
        console.log('secsses');
      } else {
        const cartString = localStorage.getItem('CartLS');
        const cartLS: CartLS[] = JSON.parse(cartString!) || [];
        state.cartLS = cartLS;
      }

    },
    addProductToCart: (state, action: PayloadAction<[ProductType, string | undefined]>) => {
      const userID = action.payload[1]
      if (userID !== undefined) {
        let config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: `http://localhost:3000/category/Cart/Add/${userID}/${action.payload[0]._id}`,
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
        console.log('ls add');
        
      }
    },
    lessProductToCart: (state, action: PayloadAction<[ProductType, string | undefined]>) => {
      const userID = action.payload[1]
      if (userID) {
        console.log('id from pro ' + action.payload[0]._id);

        let config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: `http://localhost:3000/category/Cart/lower/${userID}/${action.payload[0]._id}`,
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
        // const cartLS = localStorage.getItem('CartLS');
        // const cart: CartItem[] = JSON.parse(cartLS)
        console.log('ls less');
        
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { lessProductToCart, addProductToCart, insertDataToCart, setAmaount } = cartIndexSlice.actions

export default cartIndexSlice.reducer