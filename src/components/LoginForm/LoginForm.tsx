import React from "react";
import "./LoginForm.css";

const LoginForm = () => {
  return (
    <div className="login-form">
      <a className="close" href="#">
        ×
      </a>
      <div className="login-header">
        <p className="login-slogan">Welcome Back to</p>
        <p className="login-logo">sNeaKeR</p>
        <p className="login-logo">PapAraZzi</p>
      </div>
      <form>
        <div className="form-group email">
          <input id="email" placeholder="Email" type="email" />
        </div>
        <div className="form-group password">
          <input id="password" placeholder="Password" type="password" />
        </div>

        <div className="final">
          <button className="login-button">Login</button>
          <p className="already">
            New to here?{" "}
            <a className="signup" href="#">
              Sign up
            </a>{" "}
            with us
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
