import React, { Dispatch, SetStateAction } from 'react';
import { Typography, Avatar, Button, Checkbox, Grid, Paper, TextField, Link } from '@mui/material';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useEffect } from 'react';
import LoginForm from './LoginForm';
import Signup from './Signup';


type Props = {
    handelSignup : Dispatch<SetStateAction<string>>
    close: () => void
}

const Login = (props: Props) => {





    const paperStyle = { padding: 20, margin: '0 auto ' };
    const avatarStyle = { backgroundColor: 'green' };


    return (
        <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '70vh' }}>
            <Paper elevation={10} style={paperStyle}>
                <Grid container direction="column" justifyContent="center" alignItems="center" >
                    <Grid item>
                        <Avatar style={avatarStyle}>
                            <LockOpenOutlinedIcon />
                        </Avatar>
                    </Grid>
                    <Grid item>
                        <h2>login</h2>
                    </Grid>
                </Grid>
                <LoginForm handelSignup={props.handelSignup} close={props.close} />
                <Typography>
                    <Link href='#'>
                        Forgot password?
                    </Link>
                </Typography>
                <Typography>
                    <Button onClick={() => props.handelSignup('signup')} >
                        sign Up
                    </Button>
                </Typography>

            </Paper>
        </Grid>
    );
};

export default Login;