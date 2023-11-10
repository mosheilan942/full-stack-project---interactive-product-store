import React, {useState} from 'react'
import Project from '../types/ProjectType';

import {Typography, Box, Button, IconButton} from '@mui/material';

import { Outlet } from "react-router-dom";
import AddProjectBtn from '../components/AddProjectBtn';

type Props = {

}

const HomePage = (props: Props) => {


    return (<>
        <Box sx={{display: 'flex'}}>
        <TabsMenu  />
        <AddProjectBtn  />
        </Box>

        <Outlet/>
    </>

    )
}

export default HomePage