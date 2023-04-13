import React, { useState } from "react";
import "./LoginForm.css";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import apiClient from "../../services/api-client";
import { useNavigate, useNavigation } from "react-router-dom";
import { User } from "../SignupForm/SignupForm";

const loginSchema = z.object({ email: z.string(), password: z.string() });

interface LoginFormProps {
  handleUser: (user: User) => void;
}

export type Login = z.infer<typeof loginSchema>;

const LoginForm = ({ handleUser }: LoginFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>({ resolver: zodResolver(loginSchema) });
  const navigate = useNavigate();
  const [validation, setValidation] = useState<boolean>(true);

  const onSubmit: SubmitHandler<Login> = (_loginDetails) => {
    apiClient
      .post("/user/login", _loginDetails)
      .then((res) => {
        // redirect to homepage with login details
        console.log(res.data);
        navigate("/");
        handleUser(res.data);
      })
      .catch((err) => {
        setValidation(false);
      });
  };

  return (
    <div className="login-form">
      <a className="close" href="/">
        ×
      </a>
      <div className="login-header">
        <p className="login-slogan">Welcome Back to</p>
        <p className="login-logo">sNeaKeR</p>
        <p className="login-logo">PapAraZzi</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group email">
          <input
            {...register("email")}
            className={validation ? "" : "invalid"}
            id="email"
            placeholder="Email"
            type="email"
          />
        </div>
        <div className="form-group password">
          <input
            {...register("password")}
            id="password"
            className={validation ? "" : "invalid"}
            placeholder="Password"
            type="password"
          />
        </div>

        <div className="final">
          <button className="login-button" type="submit">
            Login
          </button>
          <p className="already">
            New to here?{" "}
            <a className="signup" href="signup">
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
