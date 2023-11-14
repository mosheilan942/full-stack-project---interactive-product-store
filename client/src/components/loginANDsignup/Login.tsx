import React from 'react';
import { Typography, Avatar, Button, Checkbox, Grid, Paper, TextField, Link } from '@mui/material';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useEffect } from 'react';
import LoginForm from './LoginForm';


type Props = {

};

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
                <LoginForm />
                <Typography>
                    <Link href='#'>
                        Forgot password?
                    </Link>
                </Typography>
                <Typography>
                    <Link href='#' onClick={((e) => (console.log('grfg')))} >
                        sign Up
                    </Link>
                </Typography>

            </Paper>
        </Grid>
    );
};

export default Login;