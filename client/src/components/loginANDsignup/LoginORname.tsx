import { Box, Button, IconButton, Link, Modal, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

import { Navigate } from 'react-router-dom';
import ROUTES from '../../router/routesModel';
import UserName from './UserName';
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../Redux/store';
import { ifUserLoged, loginUser, logoutUser } from '../../Redux/userSlice'
import Login from './Login';
import Signup from './Signup';

type Props = {}


const styleModal = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: '100%',
  minHeight: '100%',
  boxShadow: 24,
}

const syleCansel = {
  position: 'absolute',
  top: '15%',
  left: '65%',
  transform: 'translate(-50%, -50%)',
}

const LoginORname = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [loginORsinup, setLoginORsinup] = useState<string>('login');


  const dispatch = useDispatch()
  
  // dispatch(logoutUser())
  const username = useSelector((state: RootState) => state.user.name)
  const [user, setuser] = useState(username)
  useEffect(() => {
    dispatch(ifUserLoged())
    setuser(username)
  }, [])
  

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  return (
    <Box>
      {username ?
        <UserName /> :
        <Button onClick={handleOpen} sx={{ color: 'black'}}>
          LOGIN
        </Button>
      }

      <Modal sx={styleModal}
        open={open}
        onClose={handleClose}
      >
        <Box id="modal-modal" >
          <Button color='error' sx={syleCansel}
            onClick={handleClose}>cancel</Button>

          {loginORsinup === 'login' ? 
          <Login handelSignup={setLoginORsinup} close={handleClose}/> 
          : 
          <Signup handelSignup={setLoginORsinup} close={handleClose}/>}
          
        </Box>
      </Modal>

    </Box >
  )
}

export default LoginORname