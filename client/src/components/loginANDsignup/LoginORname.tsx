import { Box, Button, Link } from '@mui/material'
import React, { useEffect, useState } from 'react'

import { Navigate } from 'react-router-dom';
import ROUTES from '../../router/routesModel';
import UserName from './UserName';
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../Redux/store';
import { ifUserLoged, loginUser, logoutUser } from '../../Redux/userSlice'

type Props = {}


const LoginORname = (props: Props) => {
  const dispatch = useDispatch()
  dispatch(ifUserLoged())
  // dispatch(logoutUser())
  const usermame = useSelector((state: RootState) => state.user.name)
  const [user, setUser] = useState<string>('');
  useEffect(()=>{
    dispatch(ifUserLoged())
    setUser(usermame)
  },[usermame])
  
  return (
    <Box>
     {user? 
     <UserName/>: 
     <Button>
     <Link href={ROUTES.LOGIN} variant="body2">
        LOGIN
      </Link>
      </Button>
     }
      </Box>
  )
}

export default LoginORname