import React from "react";
import { User } from "../SignupForm/SignupForm";
import styles from "./Logout.module.css";

interface LogoutProps {
  _user: User;
  handleLogout: () => void;
}

const Logout = ({ handleLogout, _user }: LogoutProps) => {
  return (
    <div>
      <p className={styles.greeting}>Yo, {_user.username}</p>
      <button className={styles["logout-button"]} onClick={handleLogout}>
        Log out
      </button>
    </div>
  );
};

export default Logout;
