import React, { useContext } from 'react'
import { Box, Button, Typography } from '@mui/material'
import { UserContext } from '../../context/UserContext'



type Props = {}

const UserName = (props: Props) => {
  const context = useContext(UserContext);
  if (!context) return null;
  const { setUser } = context
  const { user } = context
    
    const userName = user?.user.name
  return (
    <Box sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        <Typography >Hello {userName}</Typography>
    <Button onClick={() => {setUser(null)}}>
        logout
        </Button>
        </Box>
  )
}

export default UserName