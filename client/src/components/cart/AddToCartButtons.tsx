import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../../Redux/store'
import { incrementToCart, lessToCart } from '../../Redux/cartSliec'
import { ProductType } from '../../types/ProductTypes'

type Props = {
    product: ProductType;
}

const AddToCartButtons = (props: Props) => {
    const product = props.product
    const dispatch = useDispatch()
    const cartIndex = useSelector((state: RootState) => state.cart.cartIndex);
    const cart = useSelector((state: RootState) => state.cart.cart);
  return (
    <Box sx={{display:'flex', justifyContent: 'space-around', alignItems: 'center',}}>
                <IconButton onClick={(event) => {
                    event.stopPropagation()
                    dispatch(incrementToCart(product._id))
                    
                }}>+</IconButton>
                <Typography>{cart?.find(item => item._id === product._id)?.quantity || 3}</Typography>
                <IconButton onClick={(event) => {
                    event.stopPropagation()
                    dispatch(lessToCart(product._id))
                    
                }}>-</IconButton>
            </Box>
  )
}

export default AddToCartButtons