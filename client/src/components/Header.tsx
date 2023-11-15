import { Box, IconButton, Typography } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../Redux/store'
import LoginORname from './loginANDsignup/LoginORname';


import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

type Props = {}

const styleHeaderBox = {
    my: 1, display: 'flex',
    justifyContent: 'space-between', alignItems: 'center',
}


const Header = (props: Props) => {
    
    const cartIndex = useSelector((state: RootState) => state.cart.cartIndex);

    


    return (
        <Box sx={styleHeaderBox} >
            <Box >
                Header
            </Box>
            <Box sx={{ width: 200, height: 30, display: 'flex', justifyContent: 'space-around' }}>
                <LoginORname />
                <Box>
                    <IconButton>
                    <a href='http://localhost:5173/cart' >
                        <ShoppingCartOutlinedIcon />
                        </a>
                    </IconButton>
                    {cartIndex}
                </Box>
            </Box>
        </Box>
    )
}

export default Header