import { Box, Button, Link } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getUserNameInLS } from '../utils/LSofUser';
import { Navigate } from 'react-router-dom';
import ROUTES from '../router/routesModel';

type Props = {}


const LoginORname = (props: Props) => {
  const [userName, setUserName] = useState('');
  useEffect(() => {
    const name = getUserNameInLS()
    if (name){
      setUserName(name)
    }

  }, [])
  
  return (
    <Box>
     {userName? 
     userName: 
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