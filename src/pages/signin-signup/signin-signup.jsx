import React from 'react';
import SignIn from '../../components/Sign-In/signin'
import SignUp from '../../components/sign-Up/sign-up'
import './signin-signup.style.scss'
const SignInAndSigup = () => {
    return ( 
        <div className='sign-in-and-sign-up'>
      <SignIn />
      <SignUp />
    </div>
     );
}
 
export default SignInAndSigup;
