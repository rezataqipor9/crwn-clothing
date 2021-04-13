import React, { Component } from "react";
import FormInput from "../formInput/forminput";
import CustomButton from "../custom-button/custom-button";
import {  
  auth,
  userprofile,
} from "../../Firebase/firebase.util";

import "./sign-up.style.scss";
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      Email: "",
      Password: "",
      ConfirmPassword: "",
    };
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = async (e) => {
    const { displayName, Email, Password, ConfirmPassword } = this.state;
    
    e.preventDefault();
    if (Password !== ConfirmPassword) {
      alert("PassWord Don't Mach");
      return;
    } else {
      try {
        const  {user}  = await auth.createUserWithEmailAndPassword(
          Email,
          Password          
        );
        await userprofile(user, {displayName} );
      } catch (error) {
        console.log(error);
      }
    }
    
    this.setState({
      displayName: "",
      Email: "",
      Password: "",
      ConfirmPassword: "",
    });
  };
  render() {
    const { displayName, Email, Password, ConfirmPassword } = this.state;
    return (
      <>
        <div className="sign-up">
          <h2 className="title">I do not have an account</h2>
          <span>Sign up with your email and password</span>
          <form onSubmit={this.handleSubmit} className="sign-up-form">
            <FormInput
              value={displayName}
              name="displayName"
              handleChange={this.handleChange}
              label="name"
              type="text"
              required
            />
            <FormInput
              value={Email}
              name="Email"
              handleChange={this.handleChange}
              label="Email"
              type="email"
              required
            />
            <FormInput
              value={Password}
              name="Password"
              handleChange={this.handleChange}
              label="Password"
              type="password"
              required
            />
            <FormInput
              value={ConfirmPassword}
              name="ConfirmPassword"
              handleChange={this.handleChange}
              label="ConfirmPassword"
              type="password"
              required
            />
            <CustomButton type="submit">SIGN UP</CustomButton>
          </form>
        </div>
      </>
    );
  }
}

export default SignUp;
