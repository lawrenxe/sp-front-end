import { useState } from "react";
import "./HomePage.css";
import Slogan from "../Slogan/Slogan";
import NavBar from "../NavBar/NavBar";
import InfoGrid from "../InfoGrid/InfoGrid";
import SignupButton from "../Signup-button/SignupButton";

function HomePage() {
  return (
    <div className="home-page">
      <div className="logo">
        <p className="logo">sNeaKeR</p>
        <p className="logo">PapAraZzi</p>
      </div>
      <div className="slogan">
        <Slogan />
      </div>
      <div className="signup-button">
        <SignupButton />
      </div>
      <div className="nav-bar">
        <NavBar />
      </div>
      <div className="info-grid">
        <InfoGrid />
      </div>
    </div>
  );
}

export default HomePage;
