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
    const cart = useSelector((state: RootState) => state.cart.cart);
    const cartLS = useSelector((state: RootState) => state.cart.cartLS);
    const [quantity, setquantity] = useState(0)
    const [triger, setTriger] = useState(0)


    useEffect(() => {
        // localStorage.removeItem('CartLS')
        const init = async () => {
            // await dispatch(insertDataToCart())
            // console.log(cart);
            // setCart(cart)
            const quantity = cart?.find(item => item.productId._id === product._id)?.quantity
            if (quantity) {
                setquantity(quantity)
            } else {
                const quantity = cartLS?.find(item => item.productId._id === product._id)?.quantity
                setquantity(quantity!)
            }
            if (! quantity) {
                setquantity(5)
            }


        }
        init()
    }, [triger])


    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', }}>
            <IconButton onClick={(event) => {
                event.stopPropagation()
                const add = async () => {
                    await dispatch(addProductToCart(product))
                    await dispatch(insertDataToCart(null))
                }
                add()
                // setTriger(prev => prev ++)
            }}>+</IconButton>
            <Typography>{quantity}</Typography>
            <IconButton onClick={(event) => {
                event.stopPropagation()
                dispatch(lessProductToCart(product))
                dispatch(insertDataToCart(null))
                // dispatch(insertDataToCart())
                // setTriger(prev => prev --)
            }}>-</IconButton>
        </Box>
    )
}

export default AddToCartButtons