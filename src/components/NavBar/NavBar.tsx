import "./NavBar.css";

interface NavBarProps {
  handleClick: () => void;
}

const NavBar = ({ handleClick }: NavBarProps) => {
  return (
    <div>
      <a className="a-button how-work" href="#">
        How does this work?
      </a>
      <a className="a-button" href="#">
        Contact Us
      </a>
      <a className="a-button" href="#">
        About
      </a>
      <a className="a-button" onClick={handleClick}>
        A Magic Button
      </a>
    </div>
  );
};

export default NavBar;
