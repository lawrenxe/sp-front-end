import { User } from "../SignupForm/SignupForm";
import styles from "./NavBar.module.css";

interface NavBarProps {
  handleClick: () => void;
  user: User | null;
}

const NavBar = ({ handleClick, user }: NavBarProps) => {
  return (
    <div className={styles["nav-bar"]}>
      <a className={`${styles["a-button"]} ${styles["how-work"]}`} href="#">
        How does this work?
      </a>
      <a className={styles["a-button"]} href="#">
        Contact Us
      </a>
      <a className={styles["a-button"]} href="#">
        About
      </a>
      <a className={styles["a-button"]} onClick={handleClick}>
        A Magic Button
      </a>
      {user != null && (
        <a className={`${styles["a-button"]} ${styles["post"]}`} href="post">
          Make a post
        </a>
      )}
    </div>
  );
};

export default NavBar;
