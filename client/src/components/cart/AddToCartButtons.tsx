import { Box, IconButton, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../../Redux/store'
import { CartLS, addProductToCart, insertDataToCart, lessProductToCart, } from '../../Redux/cartSliec'
import { ProductType } from '../../types/ProductTypes'
import { CartItem } from '../../types/CartTypes'

type Props = {
    product: ProductType;
}

const AddToCartButtons = (props: Props) => {
    const product = props.product
    const dispatch = useDispatch()
    const cartStore = useSelector((state: RootState) => state.cart.cart);
    const [cart, setCar] = useState<CartItem[] | CartLS[] | null>(null)
    const [quantity, setquantity] = useState(0)

    useEffect(() => {
        // localStorage.removeItem('CartLS')
        const init = async () => {
            if (! cartStore){

                await dispatch(insertDataToCart())
            }
        }
        init()
    }, [])

    useEffect(() => {
        // localStorage.removeItem('CartLS')
        const init = async () => {
            // await dispatch(insertDataToCart())
            console.log(cartStore);

            setCar(cartStore)
            const quantity = cart?.find(item => item.productId === product._id)?.quantity
            if (quantity) {
                setquantity(quantity)
            } else { setquantity(0) }
        }
        init()
    }, [cartStore])


    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', }}>
            <IconButton onClick={(event) => {
                event.stopPropagation()
                dispatch(addProductToCart(product._id))
                dispatch(insertDataToCart())
            }}>+</IconButton>
            <Typography>{quantity}</Typography>
            <IconButton onClick={(event) => {
                event.stopPropagation()
                dispatch(lessProductToCart(product._id))
                dispatch(insertDataToCart())
            }}>-</IconButton>
        </Box>
    )
}

export default AddToCartButtons