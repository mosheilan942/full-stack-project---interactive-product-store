import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductByID } from '../api/productFuncApi';
import { CellPhoneType, RefrigeratorType, WashingMachineType } from '../types/ProductTypes';
import { ExemplePhone } from '../data/typedb';
import { exemplePhone } from '../data/db';

type ProductType = CellPhoneType | RefrigeratorType | WashingMachineType;



const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ExemplePhone | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      // const getData = await getProductByID(id!)
      setProduct(exemplePhone);
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


  console.log(product)
  return (
    <Box sx={{ display: 'flex' }}>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: "50%"
      }}>
        <img src={product.image} alt={product.name} style={{ width: 500 }} />
      </Box>
      <Box sx={{ margin: 5 }}>
        <Typography variant="h4">{product.name}</Typography>
        <Typography variant="body1">Category: {product.categoryType}</Typography>
        <Typography variant="body1">Manufacturer: {product.manufacturer}</Typography>
        <Typography variant="body1">Model: {product.model}</Typography>
        <Typography variant="body1">Addresses: {product.addresses}</Typography>
        <Typography variant="body1">Date: {product.date}</Typography>
        <Typography variant="body1">Price: {product.price}</Typography>
        <Typography variant="body1">Color: {product.color}</Typography>
        <Typography variant="body1">Quantity: {product.quantity}</Typography>
        <Typography variant="body1">Description: {product.description}</Typography>
        <Typography variant="body1">Category Details: </Typography>
        <ul>
          <li>Height: {product.categoryDetails.height}</li>
          <li>Width: {product.categoryDetails.width}</li>
          <li>Weight: {product.categoryDetails.weight}</li>
          <li>Length: {product.categoryDetails.length}</li>
          <li>Screen size: {product.categoryDetails.screenSize}</li>
        </ul>
      </Box>
    </Box>
  );
};

export default ProductPage;
