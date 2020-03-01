import React, { Component } from "react";
import { signInWithGithub } from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";

import FormInput from "./../FormInput/FormInput";
import CustomButton from "./../CustomButton/CustomButton";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your emai and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            label="email"
            name="email"
            value={this.state.email}
            placeholder="Enter email"
            onHandleChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            label="password"
            name="password"
            value={this.state.password}
            placeholder="Enter password"
            onHandleChange={this.handleChange}
            required
          />
          <div className="buttons">
            <CustomButton type="submit">SignIn</CustomButton>
            <CustomButton onClick={signInWithGithub} isGithubSignIn>
              SignInWithGithub
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
