import "./SignupForm.css";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useUser from "../../hooks/useUser";
import apiClient from "../../services/api-client";
import { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";

const userSchema = z
  .object({
    firstName: z
      .string()
      .min(3, { message: "First name too short." })
      .max(50, { message: "First name too long." }),
    lastName: z
      .string()
      .min(3, { message: "Last name too short." })
      .max(50, { message: "Last name too long." }),
    email: z.string().email({ message: "Wrong format." }),
    username: z.string(),
    password: z
      .string()
      .min(9, { message: "Password too short." })
      .max(18, { message: "Password too long." }),
    confirm: z.string(),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Password does not match.",
    path: ["confirm"],
  });

export type User = z.infer<typeof userSchema>;

interface SignupFormProps {
  handleUser: (user: User) => void;
}

const SignUpForm = ({ handleUser }: SignupFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({ resolver: zodResolver(userSchema) });

  const [validationError, setError] = useState<String>("");
  const [isLoading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<User> = (_userDetails) => {
    setLoading(true);
    apiClient
      .post("/user/register", _userDetails)
      .then((res) => {
        console.log(res.data);
        handleUser(res.data);
        setLoading(false);
        navigate("/");
      })
      .catch((err) => {
        if (err.response.status === 409) {
          setLoading(false);
          console.log(err.response.data.message);
          setError(err.response.data.message);
        }
      });
  };

  return (
    <div className="signupForm-form">
      <a className={"close" + (isLoading ? " loading" : "")} href="/">
        ×
      </a>
      <div className="signupForm-header">
        <p className="signupForm-slogan">Sign up for</p>
        <p className="signupForm-logo">sNeaKeR</p>
        <p className="signupForm-logo">PapAraZzi</p>
        <p className="signupForm-slogan">to get tuned!</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="name">
          <div className="form-group fName">
            <input
              className={errors.firstName && "invalid"}
              {...register("firstName")}
              placeholder="First Name"
              required
            />
          </div>
          <div className="form-group lName">
            <input
              {...register("lastName")}
              className={errors.lastName && "invalid"}
              placeholder="Last Name"
              required
            />
          </div>
        </div>
        <div className="form-group email">
          <input
            className={
              errors.email
                ? "invalid"
                : validationError === "Email already used."
                ? "invalid"
                : ""
            }
            {...register("email")}
            placeholder="Email"
            required
          />
        </div>
        <div className="form-group username">
          <input
            className={
              errors.username
                ? "invalid"
                : validationError === "Username already used."
                ? "invalid"
                : ""
            }
            {...register("username")}
            placeholder="Username"
            required
          />
        </div>
        <div className="form-group password">
          <input
            id="password"
            className={errors.password && "invalid"}
            {...register("password")}
            placeholder="Password"
            type="password"
            required
          />
        </div>
        <div className="form-group confirm-password">
          <input
            id="confirm-password"
            className={errors.confirm && "invalid"}
            {...register("confirm")}
            placeholder="Confirm Password"
            type="password"
            required
          />
        </div>
        <div className="final">
          <button className="signupForm-button" type="submit">
            Sign Up
          </button>
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
