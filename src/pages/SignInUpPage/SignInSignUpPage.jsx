import React from "react";

import SignIn from "./../../components/SignIn/SignIn";
import Signup from "../../components/Signup/Signup";

import "./sign-in-up.styles.scss";

const SignInUpPage = () => (
  <div className="sign-in-up-page">
    <SignIn />
    <Signup />
  </div>
);

export default SignInUpPage;
