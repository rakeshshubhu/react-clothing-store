import React, { Component } from "react";

import FormInput from "./../FormInput/FormInput";
import CustomButton from "./../CustomButton/CustomButton";

import {
  auth,
  createUserProfileDocument
} from "./../../firebase/firebase.utils";

import "./sign-up.styles.scss";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleSignup = async e => {
    e.preventDefault();
    console.log(this.state);
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSignup}>
          <FormInput
            type="text"
            label="Display Name"
            name="displayName"
            value={displayName}
            onHandleChange={this.handleChange}
            required
          />
          <FormInput
            type="email"
            label="Email"
            name="email"
            value={email}
            onHandleChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            label="Password"
            name="password"
            value={password}
            onHandleChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            label="Confirm Password"
            name="confirmPassword"
            value={confirmPassword}
            onHandleChange={this.handleChange}
            required
          />
          <CustomButton type="submit">SignUp</CustomButton>
        </form>
      </div>
    );
  }
}

export default Signup;
