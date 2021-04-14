import React, { Component } from "react";
import FormInput from "../formInput/forminput";
import "./signin.style.scss";
import CustomButton from "../custom-button/custom-button";
import {
  signInWithPopup,
  auth 
} from "../../Firebase/firebase.util";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Password: "",
      Email: "",
    };
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    const { Password, Email } = this.state;
    try {
      await auth.signInWithEmailAndPassword(Email, Password);
      this.setState({ Email: "", Password: "" });
    } catch (error) {
      console.log(error);
    }
  };
  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            name="Email"
            type="email"
            value={this.state.Email}
            label="Email"
            required
          />

          <FormInput
            handleChange={this.handleChange}
            name="Password"
            type="password"
            value={this.state.Password}
            label="password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithPopup} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
