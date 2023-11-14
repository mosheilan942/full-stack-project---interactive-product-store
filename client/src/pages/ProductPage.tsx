import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

type Product = {
  id: string;
};

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`ה-URL-שלך/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
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
    <Box>
      <Typography variant="h4">{product.id}</Typography>
    </Box>
  );
};

export default ProductPage;
