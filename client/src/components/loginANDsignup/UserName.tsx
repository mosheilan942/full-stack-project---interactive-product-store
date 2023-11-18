import React, { useContext } from 'react'
import { Box, Button, Typography } from '@mui/material'
import { UserContext } from '../../context/UserContext'
import { initialStateCart } from '../../Redux/cartSliec'
import { useDispatch } from 'react-redux'



type Props = {}

const UserName = (props: Props) => {
  const dispatch = useDispatch()
  const context = useContext(UserContext);
  if (!context) return null;
  const { setUser } = context
  const { user } = context

  const userName = user?.user.name
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '122px' }}>
      <Typography >Hello {userName}</Typography>
      <Button onClick={() => {
        dispatch(initialStateCart())
        setUser(null)
      }}>
        logout
      </Button>
    </Box>
  )
}

export default UserName