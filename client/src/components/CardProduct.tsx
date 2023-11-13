import { Box, Typography } from '@mui/material'
import Product from '../types/ProductType';

type Props={
    product: Product;
}

const CardProduct = (props:Props) => {
    const product = props.product
    
    return (
        <Box key={product._id} sx={{ background: "silver", width: 150, height: 250 }}>
            <Typography variant="h6">Name: {product.name}</Typography>
            <Typography variant="h6">Category: {product.category}</Typography>
        </Box>
    )
}

export default CardProduct