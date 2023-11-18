import { Box, IconButton } from '@mui/material'
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



            <IconButton onClick={ () => {navigate(`/`);}} >
                    <img src={"../../public/logo.svg"} alt={'logo'} style={{ width: '93px' }} />
                    </IconButton>



            </Box>
            <Box sx={{ width: 200, height: 30, display: 'flex', justifyContent: 'space-around' }}>
                <LoginORname />
                <Box>
                    <IconButton onClick={ () => {navigate(`/cart`);}} >
                        <ShoppingCartOutlinedIcon sx={{ color: 'gold' }} />

                        <IconButton >
                            {cartIndex}
                        </IconButton>
                    </IconButton>


                </Box>
            </Box>
        </Box>
    )
}

export default Header