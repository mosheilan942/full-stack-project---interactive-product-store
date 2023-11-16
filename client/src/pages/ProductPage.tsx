import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductByID } from '../api/productFuncApi';
import { ProductType } from '../types/ProductTypes';
import { v4 as uuidv4 } from 'uuid';
import BasicMap from '../components/openlayers';



const ProductPage = () => {
  const { name, id } = useParams<{ name: string, id: string }>();
  const [product, setProduct] = useState<ProductType | null>(null);

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
    <>
      <Box sx={{ display: 'flex' }}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: "50%"
        }}>
          <Box >
            <img src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/iphone-14-pro-max-colors.png" alt={product.name} style={{ width: '50%' }} />
          </Box>
          <Box sx={{ width: "350px", height: "350px" }}>

            <BasicMap />
          </Box>
        </Box>
        <Box sx={{ margin: 5 }}>
          <Typography variant="h4">{product.name}</Typography>
          <Typography variant="body1">Category: {product.categoryType} .</Typography>
          <Typography variant="body1">Manufacturer: {product.manufacturer} .</Typography>
          <Typography variant="body1">Model: {product.model} .</Typography>
          <Typography variant="body1">Addresses: {product.addresses} .</Typography>
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

    </>
  );
};

export default ProductPage;
