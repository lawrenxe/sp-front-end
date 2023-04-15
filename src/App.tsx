import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import SignUpForm, { User } from "./components/SignupForm/SignupForm";
import LoginForm from "./components/LoginForm/LoginForm";
import { useState } from "react";
import PostForm from "./components/PostForm/PostForm";

function App() {
  const [user, setUser] = useState<User | null>(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user") as string)
      : null
  );
  const handleUser = (userDetails: User) => {
    localStorage.setItem("user", JSON.stringify(userDetails));
    setUser(userDetails);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<HomePage _user={user} handleLogout={handleLogout} />}
        ></Route>
        <Route
          path="signup"
          element={<SignUpForm handleUser={handleUser} />}
        ></Route>
        <Route
          path="login"
          element={<LoginForm handleUser={handleUser} />}
        ></Route>
        <Route path="post" element={<PostForm user={user} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
