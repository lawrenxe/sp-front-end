import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import SignUpForm, { User } from "./components/SignupForm/SignupForm";
import LoginForm from "./components/LoginForm/LoginForm";
import { useState } from "react";

function App() {
  const [user, setUser] = useState<User>(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user") as string)
      : null
  );
  const handleUser = (userDetails: User) => {
    localStorage.setItem("user", JSON.stringify(userDetails));
    setUser(userDetails);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage _user={user} />}></Route>
        <Route
          path="signup"
          element={<SignUpForm handleUser={handleUser} />}
        ></Route>
        <Route
          path="login"
          element={<LoginForm handleUser={handleUser} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
