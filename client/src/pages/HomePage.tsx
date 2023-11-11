import React, { useState } from 'react'
import Project from '../types/ProjectType';

import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../Redux/store'

import { Typography, Box, Button, IconButton } from '@mui/material';

// import { Outlet } from "react-router-dom";


type Props = {

}

const HomePage = (props: Props) => {
    const cartIndex = useSelector((state: RootState) => state.cartIndex.cart);

    return (<>
        <Box sx={{ display: 'flex' }}>
            Home Page
            {cartIndex}
        </Box>

        {/* <Outlet/> */}
    </>

    )
}

export default HomePage