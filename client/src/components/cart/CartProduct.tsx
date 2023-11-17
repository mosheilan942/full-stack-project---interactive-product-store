import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CardProduct from '../cardProduct/CardProduct'
import { ProductType } from '../../types/ProductTypes'
import { useSelector, useDispatch } from 'react-redux'
import { CartLS, addProductToCart, insertDataToCart } from '../../Redux/cartSliec'
import { RootState } from '../../Redux/store'
import { getAllProduct, getProductByCategory } from '../../api/productFuncApi'
import { CartItem } from '../../types/CartTypes'
import useFetch from '../../hooks/useFechHoock'
import { loginUser } from '../../Redux/userSlice'


type Props = {}

const CartAllProducts = (props: Props) => {
    const dispatch = useDispatch()
    const cart = useSelector((state: RootState) => state.cart.cart);
    const cartLS = useSelector((state: RootState) => state.cart.cartLS);
    const userID = localStorage.getItem('UserClientID');
    console.log(userID);
    
    const [pending, error, data] = useFetch<CartItem[]>(`http://localhost:3000/category/Cart/get/${userID}`);
    

    useEffect(() => {
        // localStorage.removeItem('CartLS');
        // localStorage.removeItem('UserClientID');
        if (userID){          
            dispatch(insertDataToCart(data))
            console.log('data inserted');    
        } else {
         
        
        }
        cartLS?.forEach(p => console.log(p)
        )

    }, [data])




    return (
        <Box>
            cartProduct
           {error && <p>error </p>}
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