import React from "react";
import "./button.scss";

const CustomButton = ({ children, isGithubSignIn, ...otherProps }) => (
  <button
    className={"custom-button " + (isGithubSignIn ? "github-sign-in" : "")}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
