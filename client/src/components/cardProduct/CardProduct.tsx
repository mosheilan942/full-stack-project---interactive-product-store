import { Box, Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { ProductType } from '../../types/ProductTypes';
import AddToCartButtons from '../cart/AddToCartButtons';
import { incrementToComparison } from '../../Redux/comparisonSlice';


import { useDispatch } from 'react-redux'


type Props = {
    product: ProductType;
}

const CardProduct = (props: Props) => {
    const dispatch = useDispatch()


    const handleClickToComparison = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.stopPropagation()
        navigate(`/comparison`);
    };
    const product = props.product
    const navigate = useNavigate();

    const handleBoxClick = () => {
        console.log(product.categoryType);

        navigate(`/product/${product.categoryType}/${product._id}`);
    };

    return (
        <Box
            onClick={handleBoxClick}
            key={product._id}
            sx={{
                background: 'white',
                width: 200,
                minHeight: 370,
                margin: 2,
                display: 'flex',
                textAlign: 'center',
                flexDirection: 'column',
                border: '1px solid black',
                boxShadow: '10px 10px 9px 0px rgba(0, 0, 0, 0.75)',
                WebkitBoxShadow: '10px 10px 9px 0px rgba(0, 0, 0, 0.75)', 
                MozBoxShadow: '10px 10px 9px 0px rgba(0, 0, 0, 0.75)',
                borderRadius: '10px'
              }}>
              
            <img src={product.image} alt={product.name} style={{ width: '100%', height: 150,  borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
            <Box>
                <Typography sx={{}} variant="h6">{product.name}</Typography>
                <Typography sx={{}} variant="body1">Price:{product.price}$</Typography>
                <Typography sx={{}} variant="body1">Quantity:{product.quantity}</Typography>
            </Box>
            <AddToCartButtons product={product} />


            <Box sx={{ display: 'flex', justifyContent: 'space-around', margin: '4px', alignItems: 'center' }}>
                <Button
                    onClick={(event) => {
                        event.stopPropagation()
                        dispatch(incrementToComparison(product))
                    }}
                    variant='contained'
                    sx={{
                        background: '#ecad37',
                        transition: 'background 0.3s',
                        '&:hover': {
                            background: 'gold'
                        },
                        color: 'black',
                        fontSize: '8px',
                        margin: '4px'
                    }}>
                    Add to Comparison
                </Button >
                <Button
                    onClick={handleClickToComparison}
                    variant='contained'
                    sx={{
                        background: '#ecad37',
                        transition: 'background 0.3s',
                        '&:hover': {
                            background: 'gold'
                        },
                        color: 'black',
                        fontSize: '8px',
                        margin: '4px'
                    }}>
                    Go to Comparison
                </Button>


            </Box>
        </Box>
    )
}

export default CardProduct