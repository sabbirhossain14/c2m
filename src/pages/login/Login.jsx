import React, { useState } from 'react'
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
import LoginImg from '../../assets/images/login1.jpeg'
import Images from '../../utilities/Images';
import { Modal, Typography } from '@mui/material';
import { FaRegWindowClose } from "react-icons/fa";



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



const Login = () => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
    let [passShow, setPassShow] = useState(false)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

      let handleModalClose =() =>{
        setOpen(false)
      }

    return (
        <>

            <Box>
                <Grid container spacing={0}>
                    <Grid item xs={6}>
                        <div className='loginimg'>
                            <Images source={LoginImg} alt="img" />
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className='loginbox'>
                            <div className='loginbox_inner'> <SectionHeading style="auth_heading" text="Login to your account!" />
                                <div className='provider_login'>
                                    <img src={GoogleSvg} />
                                    <span>Login with Google</span>
                                </div>
                                <div className='from_main'>
                                    <div>
                                        <Input name="email" type="email" variant="standard" labeltext="Email Address" style="login_input_field" />
                                    </div>
                                    <div>
                                        <Input name="password" type={passShow ? "text" : "password"} variant="standard" labeltext="Password" style="login_input_field" />
                                        <button onClick={() => setPassShow(!passShow)}>Show</button>
                                    </div>

                                    <CustomButton style="login_btn" variant='contained' text="login to continue" />
                                </div>
                                <AuthNavigate style="loginauth" link="/registration" linktext="Sign up" text="Don’t have an account ?" />
                                {/* <AuthNavigate style="loginauth" linktext="Forget Password" text="Forgotten password? " /> */}
                                <p className='loginauth'>
                                Forgotten password?
                                <span onClick={handleOpen}>Forget Password</span>
                                </p>

                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className='close_icon' onClick={handleModalClose}><FaRegWindowClose /></div>
                    <div className='forgot_box'>
                        <h2>Forgot Password</h2>
                        <Input type="email" labeltext="Email Address" variant="standard"/>
                        <CustomButton text="send link" variant='contained'/>
                    </div>
                </Box>
                {/* <h1>Ami modal</h1> */}
            </Modal>

        </>
    )
}

export default Login