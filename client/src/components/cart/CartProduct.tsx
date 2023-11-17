import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CardProduct from '../cardProduct/CardProduct'
import { ProductType } from '../../types/ProductTypes'
import { useSelector, useDispatch } from 'react-redux'
import { CartLS, addProductToCart, insertDataToCart } from '../../Redux/cartSliec'
import { RootState } from '../../Redux/store'
import { getAllProduct, getProductByCategory } from '../../api/productFuncApi'
import { CartItem } from '../../types/CartTypes'
import useFetch from '../../hooks/useFechHoock'


type Props = {}

const CartAllProducts = (props: Props) => {

    const [config, setConfig] = useState<any>(null);
    const [pending, error, data] = useFetch<CartItem[]>(config);
    
  
    

    useEffect(() => {
        // localStorage.removeItem('CartLS');
        // localStorage.removeItem('UserClientID');
    const userID = localStorage.getItem('UserClientID');
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `http://localhost:3000/category/Cart/get/${userID}`,
        headers: {}
    };
    setConfig(config)



        if (pending) {
            console.log('Loading...');
        } else if (error) {
            console.error('Error:', error);
        } else {
          
            console.log('Data:', data);
            // setData(data)
        }

    }, [])




    return (
        <Box>
            cartProduct
            {error && error.message}
            {data && data.map((product) => (
                <CardProduct key={product.productId._id} product={product.productId} />
            ))}
        </Box>
    )
}

export default CartAllProducts