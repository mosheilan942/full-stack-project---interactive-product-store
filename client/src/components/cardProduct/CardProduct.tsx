import { Box, IconButton, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { ProductType } from '../../types/ProductTypes';
import { camelCaseToWords } from '../../utils/camelCaseToWords';
import AddToCartButtons from '../cart/AddToCartButtons';

type Props = {
    product: ProductType;
}

const CardProduct = (props: Props) => {
    const product = props.product
    const navigate = useNavigate();

    const handleBoxClick = () => {
        navigate(`/product/${product.categoryType}/${product._id}`);
    };

    return (
        <Box
            onClick={handleBoxClick}
            key={product._id}
            sx={{
                background: "#ffe3b8",
                width: 200,
                minHeight: 250,
                margin: 2,
                display: 'flex',
                justifyContent: 'center',
                textAlign: 'center',
                flexDirection: 'column'
            }}>
            <img src={"https://images.pexels.com/photos/7988747/pexels-photo-7988747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt={product.name} style={{ width: '100%', height: '30%' }} />
            <Box>
            {/* <Typography sx={{alignSelf:'flex-start', textAlign:'start', marginBottom:'42px'}} variant="body1">Category:{camelCaseToWords(product.categoryType)}</Typography> */}
            <Typography sx={{}} variant="h6">{product.name}</Typography>
            <Typography sx={{ }} variant="body1">Price:{product.price}$</Typography>
            <Typography sx={{ }} variant="body1">Quantity:{product.quantity}</Typography>
            </Box>

           <AddToCartButtons  product={product}/>
        </Box>
    )
}

export default CardProduct