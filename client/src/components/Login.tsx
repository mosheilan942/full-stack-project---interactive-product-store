import React from 'react';
import { Typography, Avatar, Button, Checkbox, Grid, Paper, TextField, Link } from '@mui/material';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useEffect } from 'react';





type Props = {
    // handleChange: (event: React.SyntheticEvent, newValue: number) => void
};

const Login = (props: Props) => {





    const paperStyle = { padding: 20, margin: '0 auto ' };
    const avatarStyle = { backgroundColor: 'green' };
    const textFieldStyle = { padding: '2px', margin: '4px auto ' }

    const handleLogin = (e) => {
        // פה תוכל להוסיף את הפעולות שיש לבצע בעת לחיצה על כפתור ההתחברות (לדוגמה, שליחת הטופס לשרת)
        // לדוגמה:
        // אפשר לשלוח את הפרטים של המשתמש לשרת ולבדוק אם הוא מורשה
        // אם ההתחברות הצליחה, תוכל להפנות את המשתמש לדף מסוים באפליקציה שלך
    };

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
                <TextField style={textFieldStyle} label="userName" placeholder="Enter user name" fullWidth required />
                <TextField style={textFieldStyle} label="password" placeholder="Enter password" type="password" fullWidth required />
                <FormControlLabel
                    control={
                        <Checkbox name="checkedB" color="primary" />
                    }
                    label="Remember me"
                />
                <Button
                    variant="outlined"
                    color="primary"
                    fullWidth
                    onClick={handleLogin}
                >
                    sign in
                </Button>
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