import { Box, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { CellPhoneType } from '../../types/ProductTypes';
import { RefrigeratorType } from '../../types/ProductTypes';
import { WashingMachineType } from '../../types/ProductTypes';

type Props = {
    product: CellPhoneType | RefrigeratorType |WashingMachineType;
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
            <Typography sx={{ background: '#d55d31', marginTop: 3 }} variant="h6">Name: </Typography>
            {product.name}
            <Typography sx={{ background: '#d55d31', marginTop: 3 }} variant="h6">Category: </Typography>
            {product.categoryType}

        </Box>
    )
}

export default CardProduct