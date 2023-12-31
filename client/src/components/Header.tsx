import { Box, Button, IconButton, Typography } from '@mui/material'
import { useSelector, } from 'react-redux'
import type { RootState } from '../Redux/store'
import LoginORname from './loginANDsignup/LoginORname';
import { useNavigate } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


const styleHeaderBox = {
    my: 1, display: 'flex',
    justifyContent: 'space-between', alignItems: 'center',
}


const Header = () => {
    const navigate = useNavigate();

    const cartIndex = useSelector((state: RootState) => state.cart.cartIndex);




    return (
        <Box sx={styleHeaderBox} >
            <Box >



                <Button onClick={() => { navigate(`/`); }} >

                    <img src={"../../public/logo.svg"} alt={'logo'} style={{ width: '140px' }} />
                </Button>



            </Box>
            <Box sx={{ width: 200, height: 30, display: 'flex', justifyContent: 'space-around' }}>
                <LoginORname />
                <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                    <IconButton onClick={() => { navigate(`/cart`); }} >
                        <ShoppingCartOutlinedIcon sx={{ color: 'black' }} />

                    </IconButton>
                    <Typography sx={{ color: 'black' }} >
                        {cartIndex}
                    </Typography>


                </Box>
            </Box>
        </Box>
    )
}

export default Header