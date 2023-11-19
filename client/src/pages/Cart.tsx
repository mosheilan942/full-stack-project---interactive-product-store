import React from 'react'
import CartProduct from '../components/cart/CartProduct'
import { Box, Typography } from '@mui/material'

import { useSelector, } from 'react-redux'
import { RootState } from '../Redux/store'
import Paypal from '../components/loginANDsignup/Paypal'

type Props = {}

const Cart = (props: Props) => {
  const cart = useSelector((state: RootState) => state.cart.cart);
  const cartIndex = useSelector((state: RootState) => state.cart.cartIndex);
  
  return (
    <Box sx={{display: 'flex', flexDirection: 'column'}}>

      <Typography variant='h6' >The number of products in the cart: {cartIndex}</Typography>
    <Box sx={{display: 'flex'}}>
      <CartProduct/>
    </Box>
    <Paypal/>
    </Box>
  )
}

export default Cart