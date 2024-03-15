import React from 'react'
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import "./login.css"
import SectionHeading from '../../components/SectionHeading';
import GoogleSvg from '../../../public/google.svg';
import Input from '../../components/Input';
import CustomButton from '../../components/CustomButton';
import AuthNavigate from '../../components/AuthNavigate';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



const Login = () => {
    return (
        <>

            <Box>
                <Grid container spacing={0}>
                    <Grid item xs={6}>
                        <div className='loginbox'>
                            <div className='loginbox_inner'> <SectionHeading style="auth_heading" text="Login to your account!" />
                            <div className='provider_login'>
                               <img src={GoogleSvg}/>
                               <span>Login with Google</span>
                            </div>
                            <div className='from_main'>
                                <Input name ="email" type ="email" variant ="standard" labeltext ="Email Address" style ="login_input_field"/>
                                <Input name="password" type ="password"  variant ="standard" labeltext ="Password" style ="login_input_field"/>
                                <CustomButton style="login_btn" variant='contained' text="login to continue"/>
                            </div>
                            <AuthNavigate style="loginauth" link="/registration" linktext="Sign up" text="Don’t have an account ?"/>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className='loginimg'>
                            
                        </div>
                        
                    </Grid>
                </Grid>
            </Box>
            
        </>
    )
}

export default Login