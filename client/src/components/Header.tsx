import { Box, Typography } from '@mui/material'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../Redux/store'

type Props = {}

const styleHeaderBox = {
    my: 1, display: 'flex',
    justifyContent: 'space-around', alignItems: 'space-around',
  }

const Header = (props: Props) => {
    const cartIndex = useSelector((state: RootState) => state.cartIndex.cart);

    return (
        <Box sx={styleHeaderBox} >
            <Typography variant='h5'>
            Header
            </Typography>
            <Typography variant='h5'>
            cart: {cartIndex}
            </Typography>
        </Box>
    )
}

export default Header