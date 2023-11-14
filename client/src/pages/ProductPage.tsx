import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductByID } from '../api/productFuncApi';
import { CellPhoneType, RefrigeratorType, WashingMachineType } from '../types/ProductTypes';

type ProductType = CellPhoneType | RefrigeratorType | WashingMachineType;


const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const getData = await getProductByID(id!)
      setProduct(getData[0]);
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
      <img src={product.image} alt={product.name} style={{ width: "50%" }} />
      <Box>
        <Typography variant="h4">{product._id}</Typography>
        <Typography variant="body1">{product.name}</Typography>
        <Typography variant="body1">{product.categoryType}</Typography>
        <Typography variant="body1">{product.addresses}</Typography>
        <Typography variant="body1">{product.date}</Typography>
        <Typography variant="body1">{product.price}</Typography>
        <Typography variant="body1">{product.model}</Typography>
        <Typography variant="body1">{product.color}</Typography>

      </Box>
    </Box>
  );
};

export default ProductPage;
