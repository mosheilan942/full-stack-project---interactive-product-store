import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CardProduct from '../cardProduct/CardProduct'
import { ProductType } from '../../types/ProductTypes'
import { useSelector, useDispatch } from 'react-redux'
import { insertCart } from '../../Redux/cartSliec'
import { RootState } from '../../Redux/store'

type Props = {}

const cartProduct = (props: Props) => {

  const dispatch = useDispatch()
    const data = useSelector((state: RootState) => state.cart.cart)

    useEffect(() => {
        dispatch(insertCart(props))
    }, []);


    return (
        <Box>
            cartProduct
            {data && data.map((product) => (
                <CardProduct key={product._id} product={product} />
            ))}
        </Box>
    )
}

export default cartProduct