import { Box, Typography } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../Redux/store'
import LoginORname from './loginANDsignup/LoginORname'

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

type Props = {}

const styleHeaderBox = {
    my: 1, display: 'flex',
    justifyContent: 'space-between', alignItems: 'center',
}

const Header = (props: Props) => {
    const cartIndex = useSelector((state: RootState) => state.cartIndex.cart);

    return (
        <Box sx={styleHeaderBox} >
            <Box >
                Header
            </Box>
            <Box sx={{ width: 200, height: 30, display: 'flex', justifyContent: 'space-around' }}>
                <LoginORname />
                <Box>
                <ShoppingCartOutlinedIcon/>
                {cartIndex}
                </Box>
            </Box>
        </Box>
    )
}

export default Header