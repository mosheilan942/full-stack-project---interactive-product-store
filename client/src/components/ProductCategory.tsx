import { Typography, Box } from '@mui/material';
import CardProduct from './CardProduct';

type ProductCategoryProps<T> = {
  title: string;
  products: T[];
};

const ProductCategory = <T extends { _id: string }>({ title, products }: ProductCategoryProps<T>) => (
  <>
    <Box sx={{ display: 'flex' }}>
      <Typography variant="h4">{title}:</Typography>
    </Box>
    {products.map((product:any) => (
      <CardProduct key={product._id} product={product} />
    ))}
  </>
);

export default ProductCategory;
