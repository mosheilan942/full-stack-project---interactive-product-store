import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'

type Props = {}

const AddToCartButtons = (props: Props) => {
  return (
    <Box sx={{display:'flex', justifyContent: 'space-around', alignItems: 'center',}}>
                <IconButton onClick={(event) => {
                    event.stopPropagation()
                    console.log('vfd');
                }}>+</IconButton>
                <Typography>5</Typography>
                <IconButton>-</IconButton>
            </Box>
  )
}

export default AddToCartButtons