import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../Redux/store'
import { ifUserLoged, loginUser, logoutUser } from '../../Redux/userSlice'
import { Box, Button, Typography } from '@mui/material'



type Props = {}

const UserName = (props: Props) => {
    const dispatch = useDispatch() 
    const userName = useSelector((state: RootState) => state.user.name)
  return (
    <Box sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        <Typography >Hello {userName}</Typography>
    <Button onClick={() => {dispatch(logoutUser())}}>
        logout
        </Button>
        </Box>
  )
}

export default UserName