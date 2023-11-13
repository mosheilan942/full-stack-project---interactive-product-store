import { Box, Typography } from '@mui/material'
import Product from '../types/ProductType';

type Props = {
    product: Product;
}

const CardProduct = (props: Props) => {
    const product = props.product

    return (
        <Box key={product._id} sx={{
            background: "silver",
            width: 150,
            height: 250,
            margin: 2,
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
            flexDirection: 'column'
        }}>
            <Typography sx={{background: 'red'}} variant="h6">Name: </Typography>
            {product.name}
            <Typography sx={{background: 'red'}} variant="h6">Category: </Typography>
            {product.category}
        </Box>
    )
}

export default CardProduct