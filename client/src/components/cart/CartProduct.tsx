import { Box, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import CardProduct from '../cardProduct/CardProduct'
import { useSelector, useDispatch } from 'react-redux'
import { CartLS, addProductToCart, insertDataToCart } from '../../Redux/cartSliec'
import { RootState } from '../../Redux/store'
import { CartItem } from '../../types/CartTypes'
import useFetch from '../../hooks/useFechHoock'
import { UserContext } from '../../context/UserContext'


type Props = {}

const CartAllProducts = (props: Props) => {
    const context = useContext(UserContext);
    if (!context) return null;
    const {user} = context
    const userID = user?.user._id
  
    const dispatch = useDispatch()
    const cart = useSelector((state: RootState) => state.cart.cart);
    const cartLS = useSelector((state: RootState) => state.cart.cartLS);
    console.log(userID);
    
    const [pending, error, data] = useFetch<CartItem[]>(`http://localhost:3000/category/Cart/get/${userID}`);
    
    useEffect(() => {
        if (userID) {
          dispatch(insertDataToCart(data));
          console.log('data from fech inserted');    
        } else {
          // Handle local storage logic for cartLS
        }
      }, [data, userID, dispatch]);




    return (
        <Box>
            cartProduct
           {error && <p>error </p>}
           {pending && <p>loding.... </p>}
            {
             cart ?  cart.map((product) => (<>
                <CardProduct key={product.productId._id} product={product.productId} />
                </>)) 
                : 
                cartLS && cartLS.map((product) => (<>
                    <CardProduct key={product.productId._id} product={product.productId} />
                    </>)) 
            }
        </Box>
    )
}

export default CartAllProducts