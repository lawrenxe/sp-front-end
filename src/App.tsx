import { useState } from "react";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import SignUpForm from "./components/SignupForm/SignupForm";
import LoginForm from "./components/LoginForm/LoginForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="signup" element={<SignUpForm />}></Route>
        <Route path="login" element={<LoginForm />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
