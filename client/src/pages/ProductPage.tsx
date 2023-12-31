import { Box, Button, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductByID } from '../api/productFuncApi';
import { ProductType } from '../types/ProductTypes';
import { v4 as uuidv4 } from 'uuid';

import BasicMap from '../components/openLayers';

import AddToCartButtons from '../components/cart/AddToCartButtons';
import { incrementToComparison } from '../Redux/comparisonSlice';
import { useNavigate } from 'react-router-dom';


import { useDispatch } from 'react-redux'





const ProductPage = () => {
  const { name, id } = useParams<{ name: string, id: string }>();
  const [product, setProduct] = useState<ProductType | null>(null);
  const dispatch = useDispatch()

  const navigate = useNavigate();

  const handleClickToComparison = () => {
    navigate(`/comparison`);
  };


  useEffect(() => {
    const fetchData = async () => {
      const getData: ProductType = await getProductByID(`${name}/id/${id}`);
      setProduct(getData);
    };
    fetchData();
  }, [id]);
  if (!product) {
    return (
      <Box>
        <Typography variant="h4">Loading...</Typography>
      </Box>
    );
  }
  return (

    <Box sx={{ display: 'flex' }}>


      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: "50%"
      }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-around', margin: '4px', flexDirection: 'column', alignItems: 'center' }}>
          <img src={product.image} alt={product.name} style={{ width: '50%' }} />
          <Button variant='contained' sx={{ margin: '4px', }}
            onClick={() => {
              dispatch(incrementToComparison(product))
              navigate(`/category/${name}`);
            }}
          >
            Add to Comparison
          </Button >
          <Button
            onClick={handleClickToComparison}
            variant='contained' sx={{ margin: '4px', }}>
            Go to Comparison
          </Button>
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

  );
}

export default ProductPage;