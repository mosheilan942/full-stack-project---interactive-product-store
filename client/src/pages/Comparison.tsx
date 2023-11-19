import React, { useEffect, useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../Redux/store'
import { Box, Button, Typography } from '@mui/material'
import CardProduct from '../components/cardProduct/CardProduct'
import { ProductType } from '../types/ProductTypes'
import AddToCartButtons from '../components/cart/AddToCartButtons'
import BasicMap from '../components/openLayers'
import { v4 as uuidv4 } from 'uuid';




const Comparison = () => {
  const dataRducs = useSelector((state: RootState) => state.comparison.comparison)
  const [data, setdata] = useState<ProductType[] | null>(null)
  useEffect(() => {
    setdata(dataRducs)
  }, [])

  return (
    <>
    <Typography variant='h2'>Comparison</Typography>
    <Box sx={{ display: 'flex',  flexWrap: 'wrap', justifyContent:'space-around' }}>
      {data && data!.map((prod : ProductType) => {
        return <ComparisonCard product={prod} />
      })}
      </Box>
      </>
  )
}

export default Comparison





type Props = {
  product: ProductType;
}

const ComparisonCard = (props: Props) => {
  const { product } = props
  return (
   
    <Box sx={{ display: 'flex', width: "44%", border:'1px solid black', margin:'33px 3px',
    boxShadow: '10px 10px 9px 0px rgba(0, 0, 0, 0.75)',
    WebkitBoxShadow: '10px 10px 9px 0px rgba(0, 0, 0, 0.75)',
    MozBoxShadow: '10px 10px 9px 0px rgba(0, 0, 0, 0.75)',
    borderRadius: '10px' }}>


      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: "60%"
      }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-around', margin: '4px', flexDirection: 'column', alignItems: 'center' }}>
          <img src={product.image} alt={product.name} style={{ width: '100%' }} />

          <AddToCartButtons product={product} />

        </Box>
        <Box sx={{ width: "100%", height: "40%" }}>

          <BasicMap />
        </Box>
      </Box>


      <Box sx={{ margin: 5 }}>
        <Typography variant="h4">{product.name}</Typography>
        <Typography variant="body1">Category: {product.categoryType} .</Typography>
        <Typography variant="body1">Manufacturer: {product.manufacturer} .</Typography>
        <Typography variant="body1">Model: {product.model} .</Typography>
        {/* <Typography variant="body1">Addresses: {product.addresses} .</Typography> */}
        <Typography variant="body1">Rating: {product.rating} .</Typography>
        <Typography variant="body1">Date: {product.date} .</Typography>
        <Typography variant="body1">Price: {product.price} .</Typography>
        <Typography variant="body1">Color: {product.color} .</Typography>
        <Typography variant="body1">Quantity: {product.quantity} .</Typography>
        <Typography variant="body1">Description: {product.description} .</Typography>
        {product.dimensions &&
          <>
            <br />
            <Typography variant="body1">Dimensions:</Typography>
            <ul>
              {Object.entries(product.dimensions).map(([key, value]) => (
                <li key={uuidv4()}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
                </li>
              ))}
            </ul>
          </>
        }
      </Box>


    </Box>
  )
}

