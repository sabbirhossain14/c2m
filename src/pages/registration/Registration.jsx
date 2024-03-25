import { Box, Grid } from '@mui/material'
import React, { useState } from 'react'
import SectionHeading from '../../components/SectionHeading'
import Input from '../../components/Input'
import CustomButton from '../../components/CustomButton'
import AuthNavigate from '../../components/AuthNavigate'
import Images from '../../utilities/Images'
import RegistrationImg from '../../assets/images/registration1.jpeg'

const Registration = () => {
  let [signupData, setSignupData] = useState({
    email:"",
    fullname:"",
    password:"",
  }
  )

  let handleForm = (e) => {
    let {name, value} = e.target
    setSignupData({
      ...signupData,[name]:value
    })
  }
  
  let handleSubmit = () => {
    if(!signupData.email){

    }   
  }

  return (
    <Box>
      <Grid container spacing={0}>
        <Grid item xs={6}>
          <div className='loginbox'>
            <div className='loginbox_inner'>
              <SectionHeading style="auth_heading" text="Get started with easily register" />
              <div className='from_main'>
                <Input onChange={handleForm} name="email" type="email" variant="outlined" labeltext="Email Address" style="login_input_field" />
                <Input onChange={handleForm} name="fullname" type="text" variant="outlined" labeltext="Full Name" style="login_input_field" />
                <Input onChange={handleForm} name="password" type="password" variant="outlined" labeltext="Password" style="login_input_field" />
                <CustomButton onClick={handleSubmit} style="login_btn" variant='contained' text="Sign up" />
              </div>
              <AuthNavigate style="loginauth" link="/" linktext="Sign In" text="Already  have an account ? " />
            </div>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className='loginimg'>
            <Images source={RegistrationImg} alt="img" />
          </div>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Registration