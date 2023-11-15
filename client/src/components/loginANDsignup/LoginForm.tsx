import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { loginUser } from '../../api/usersFuncApi';
import { addUserInLS } from '../../utils/LSofUser';

const schema = yup.object({
  firstName: yup.string().max(12).required(),
  lastName: yup.string().max(12).required(),
  email: yup.string().email().required(),
  password: yup.string().min(4).max(12).required()
})
  .required();

  interface UserFormInput {
    firstName: string;
    lastName: string;
    email: string;
    password: string; 
  }

type Props = {}

const LoginForm = (props: Props) => {
  const textFieldStyle = { padding: '2px', margin: '4px auto ' }
  const [loding, setLoding] = useState(false)

  const { register, formState: { errors }, handleSubmit } = useForm<UserFormInput>({
    resolver: yupResolver(schema),
  });
  
  const onSubmit: SubmitHandler<UserFormInput> = async (data) => {
    console.log(data);
    const name = data.firstName+' '+data.lastName;
    const email = data.email
    const password = data.password

    const user =  JSON.stringify({
      name : name,
      email : email,
      password : password
    });
    setLoding(true)
    const req =  await loginUser(user) 
    setLoding(false)

    console.log(req);
    

    addUserInLS({name, email,})
     
 }

  return (
    
    <form onSubmit={handleSubmit(onSubmit)}>
      {loding? 'loding......' : <Grid>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>

        <Grid sx={{ display: 'flex', flexDirection: 'column' }}>
          <TextField style={textFieldStyle} label="First Name" placeholder="Enter first name"
            {...register("firstName", { required: true, maxLength: 20 })}
            aria-invalid={errors.firstName ? "true" : "false"} />
          <Typography color='red' variant='caption'>{errors.firstName?.message}</Typography>
        </Grid>

        <Grid sx={{ display: 'flex', flexDirection: 'column' }}>
          <TextField style={textFieldStyle} label="Last Name" placeholder="Enter last name"
            {...register("lastName", { required: true, maxLength: 20 })}
            aria-invalid={errors.lastName ? "true" : "false"} />
          <Typography color='red' variant='caption'>{errors.lastName?.message}</Typography>
        </Grid>
      </Box>

      <Grid sx={{ display: 'flex', flexDirection: 'column' }}>
        <TextField style={textFieldStyle} label="Email" placeholder="Enter your email" fullWidth
          {...register("email", { required: true, pattern: /^\S+@\S+\.\S+$/ })}
          aria-invalid={errors.email ? "true" : "false"} />
        <Typography color='red' variant='caption'>{errors.email?.message}</Typography>
      </Grid>

      <Grid sx={{ display: 'flex', flexDirection: 'column' }}>
        <TextField style={textFieldStyle} label="Password" placeholder="Enter your password" fullWidth
          {...register("password", { required: true, min: 4, max: 12 })}
          aria-invalid={errors.password ? "true" : "false"} />
        <Typography color='red' variant='caption'>{errors.password?.message}</Typography>
      </Grid>
      </Grid>}
      <Button
        type='submit'
        variant="contained"
        color="primary"
        fullWidth
      >
        sign in
      </Button>
    </form >
  )
}

export default LoginForm