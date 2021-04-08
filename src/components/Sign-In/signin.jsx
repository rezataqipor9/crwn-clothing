import React, { Component } from "react";
import FormInput from "../formInput/forminput";
import "./signin.style.scss";
import CustomButton from "../custom-button/custom-button";
import { signInWithGoogle } from "../../Firebase/firebase.util";
import { auth } from "../../Firebase/firebase.util";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Password: "",
      Email: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ Email: "", Password: "" });
  };
  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I Already Have an Account</h2>
        <span>Sign In With Your User And Password</span>
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
            <CustomButton  type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
