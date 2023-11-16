import { Box, IconButton} from '@mui/material'
import { useSelector, } from 'react-redux'
import type { RootState } from '../Redux/store'
import LoginORname from './loginANDsignup/LoginORname';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


const styleHeaderBox = {
    my: 1, display: 'flex',
    justifyContent: 'space-between', alignItems: 'center',
}


const Header = () => {

    const cartIndex = useSelector((state: RootState) => state.cart.cartIndex);




    return (
        <Box sx={styleHeaderBox} >
            <Box >



                <a href='http://localhost:5173/' >
                    <img src={"../../public/logo.svg"} alt={'logo'} style={{ width: '93px' }} />
                </a>


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