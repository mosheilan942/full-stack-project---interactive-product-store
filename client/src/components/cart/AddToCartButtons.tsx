import React, { useContext, useEffect, useState } from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../../Redux/store'
import {  addProductToCart,  lessProductToCart, } from '../../Redux/cartSliec'
import { ProductType } from '../../types/ProductTypes'
import { addProductToCartByID, lessProductToCartByID } from '../../api/cartFuncApi'
import { UserContext } from '../../context/UserContext'

type Props = {
    product: ProductType;
}

const AddToCartButtons = (props: Props) => {
    const product = props.product
    const dispatch = useDispatch()
    const cart = useSelector((state: RootState) => state.cart.cart);
    const cartLS = useSelector((state: RootState) => state.cart.cartLS);
    const [quantity, setQuantity] = useState(0)

    const context = useContext(UserContext);
    if (!context) return null;
    const { user } = context
    const userID = user?.user._id


    useEffect(() => {
        const init = () => {
            const quantityFromCart = cart?.find((item) => item.productId._id === product._id)?.quantity;
            
            const quantityFromCartLS = cartLS?.find((item) => item.productId._id === product._id)?.quantity;

            setQuantity(quantityFromCart || quantityFromCartLS || 0);
        };

        init();
    }, [product, cart, cartLS]);


    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', }}>
            <IconButton onClick={(event) => {
                event.stopPropagation()
                if (userID) {
                    const add = async () => {
                        try {
                            await addProductToCartByID(product._id, userID)
                            dispatch(addProductToCart([product, userID]))
                        } catch (error) {
                            console.log(error);
                        }
                    }
                    add()
                } else {
                    dispatch(addProductToCart([product, userID]))

                }

            }}>+</IconButton>

            <Typography>{quantity}</Typography>

            <IconButton onClick={(event) => {
                event.stopPropagation()
                if (userID) {
                    const add = async () => {
                        try {
                            await lessProductToCartByID(userID, product._id)
                            await dispatch(lessProductToCart([product, userID]))

                        } catch (error) {
                            console.log(error);
                        }
                    }
                    add()

                } else {
                    dispatch(lessProductToCart([product, userID]))
                }
            }}>-</IconButton>
        </Box>
    )
}

export default AddToCartButtons