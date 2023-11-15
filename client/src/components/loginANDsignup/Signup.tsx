import React, { Dispatch, SetStateAction, useState } from 'react';
import { Avatar,  Grid, Paper, } from '@mui/material';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';

import SignupForm from './SignupForm';

type Props = {
    handelSignup : Dispatch<SetStateAction<string>>
    close: () => void
};

const Signup = (props: Props) => {

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
                        <h2>Signup</h2>
                    </Grid>
                </Grid>
                <SignupForm handelSignup={props.handelSignup} close={props.close} />
                
            </Paper>
        </Grid>
    );
};

export default Signup;