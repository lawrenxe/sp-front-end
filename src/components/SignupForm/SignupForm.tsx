import "./SignupForm.css";
import React, { useState } from "react";

export interface User {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

const SignUpForm = () => {
  return (
    <div className="signupForm-form">
      <a className="close" href="/">
        ×
      </a>
      <div className="signupForm-header">
        <p className="signupForm-slogan">Sign up for</p>
        <p className="signupForm-logo">sNeaKeR</p>
        <p className="signupForm-logo">PapAraZzi</p>
        <p className="signupForm-slogan">to get tuned!</p>
      </div>
      <form>
        <div className="name">
          <div className="form-group fName">
            <input id="fName" placeholder="First Name" type="text" />
          </div>
          <div className="form-group lName">
            <input id="lName" placeholder="Last Name" type="text" />
          </div>
        </div>
        <div className="form-group email">
          <input id="email" placeholder="Email" type="email" />
        </div>
        <div className="form-group username">
          <input id="username" placeholder="User Name" type="text" />
        </div>
        <div className="form-group password">
          <input id="password" placeholder="Password" type="password" />
        </div>
        <div className="form-group confirm-password">
          <input
            id="confirm-password"
            placeholder="Confirm Password"
            type="password"
          />
        </div>
        <div className="final">
          <button className="signupForm-button">Sign Up</button>
          <p className="already">
            Already have an account?{" "}
            <a className="login" href="login">
              Login
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};
export default SignUpForm;
