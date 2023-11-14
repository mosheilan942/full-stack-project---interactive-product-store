import { Box, Button, TextField } from '@mui/material';
import React from 'react'
import { useForm, SubmitHandler} from "react-hook-form";


interface IFormInput {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }






type Props = {}

const LoginForm = (props: Props) => {
    const textFieldStyle = { padding: '2px', margin: '4px auto ' }

    const { register, handleSubmit } = useForm();
    const onSubmit: SubmitHandler<any> = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <Box>
    <TextField style={textFieldStyle} label="First Name" placeholder="Enter first name" 
    {...register("firstName", { required: true, maxLength: 20 })} />
    <TextField style={textFieldStyle} label="Last Name" placeholder="Enter last name" 
    {...register("lasttName", { required: true, maxLength: 20 })} />
    </Box>
    <TextField style={textFieldStyle} label="Email" placeholder="Enter your email" fullWidth
    {...register("email", { required: true,  pattern: /^\S+@\S+\.\S+$/ })} />
    <TextField style={textFieldStyle} label="Password" placeholder="Enter your password" fullWidth
    {...register("password", { required: true,  min: 4, max: 12 })} />
    {/* <FormControlLabel
        control={
            <Checkbox name="checkedB" color="primary" />
        }
        label="Remember me"
    /> */}
    <Button
        type='submit'
        variant="outlined"
        color="primary"
        fullWidth
    >
        sign in
    </Button>
    </form>
  )
}

export default LoginForm