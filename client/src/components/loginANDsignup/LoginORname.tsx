import { Box, Button, IconButton, Link, Modal, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'


import UserName from './UserName';

import Login from './Login';
import Signup from './Signup';
import {UserContext} from '../../context/UserContext';

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
  const context = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const [loginORsinup, setLoginORsinup] = useState<string>('login');


  if (!context) return null;
  const {user} = context
  const name = user?.user.name
  
  console.log(user);



  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  return (
    <Box>
      {name ?
        <UserName /> :
        <Button onClick={handleOpen} sx={{ color: 'gold'}}>
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