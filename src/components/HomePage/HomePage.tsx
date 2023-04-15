import { useState } from "react";
import "./HomePage.css";
import Slogan from "../Slogan/Slogan";
import NavBar from "../NavBar/NavBar";
import InfoGrid from "../InfoGrid/InfoGrid";
import SignupButton from "../Signup-button/SignupButton";
import { MagicWords } from "../MagicWords/MagicWords";
import { User } from "../SignupForm/SignupForm";
import { Login } from "../LoginForm/LoginForm";
import Logout from "../Logout/Logout";

interface HomePageProps {
  _user: User | null;
  handleLogout: () => void;
}

function HomePage({ _user, handleLogout }: HomePageProps) {
  const handleClick = () => {
    setIsMagic(!isMagic);
  };

  const [isMagic, setIsMagic] = useState<Boolean>(false);

  return (
    <div className="home-page">
      <div className="logo">
        <p className="logo">sNeaKeR</p>
        <p className="logo">PapAraZzi</p>
      </div>
      <div className="slogan">
        <Slogan />
      </div>

      <div className="nav-bar">
        <NavBar handleClick={handleClick} user={_user} />
      </div>
      {isMagic ? (
        <div className="info-grid">
          <MagicWords />
        </div>
      ) : (
        <div className="info-grid">
          <InfoGrid />
        </div>
      )}
      <div className="signup-button">
        {_user !== null ? (
          <Logout handleLogout={handleLogout} _user={_user} />
        ) : (
          <SignupButton />
        )}
      </div>
    </div>
  );
}

export default HomePage;
