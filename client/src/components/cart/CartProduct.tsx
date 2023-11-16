import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CardProduct from '../cardProduct/CardProduct'
import { ProductType } from '../../types/ProductTypes'
import { useSelector, useDispatch } from 'react-redux'
import { CartLS, addProductToCart, insertDataToCart } from '../../Redux/cartSliec'
import { RootState } from '../../Redux/store'
import { getAllProduct, getProductByCategory } from '../../api/productFuncApi'
import { CartItem } from '../../types/CartTypes'

type Props = {}

const cartProduct = (props: Props) => {

  const dispatch = useDispatch()
    const dataRducs = useSelector((state: RootState) => state.cart.cart)
    const [data, setData] = useState<CartItem[] | null>(null);

    useEffect(()=>{
        const insertData = async () => {
        // console.log(data);
        
        dispatch(insertDataToCart())
        
            setData(dataRducs)
        
        }
        insertData()
        
    },[])
    



    return (
        <Box>
            cartProduct
            {data && data.map((product) => (
                 <CardProduct key={product.productId._id} product={product.productId} />              
            ))}
        </Box>
    )
}

export default cartProduct