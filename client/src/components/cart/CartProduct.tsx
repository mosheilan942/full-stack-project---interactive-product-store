import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CardProduct from '../cardProduct/CardProduct'
import { ProductType } from '../../types/ProductTypes'
import { useSelector, useDispatch } from 'react-redux'
import { addProductToCart, insertDataToCart } from '../../Redux/cartSliec'
import { RootState } from '../../Redux/store'
import { getAllProduct, getProductByCategory } from '../../api/productFuncApi'

type Props = {}

const cartProduct = (props: Props) => {

  const dispatch = useDispatch()
    const dataRducs = useSelector((state: RootState) => state.cart.cart)
    const [data, setData] = useState<ProductType[]| null>(null);

    useEffect(()=>{
        const insertData = async () => {
        const data = await getProductByCategory('cellPhone')
        // console.log(data);
        
        dispatch(insertDataToCart())
        setData(data.product)
        }
        insertData()
        
    },[])
    



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