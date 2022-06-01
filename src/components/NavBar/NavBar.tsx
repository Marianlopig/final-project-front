import { VscAccount } from "react-icons/vsc";
import { RiMenuFill } from "react-icons/ri";
import { NavBarStyles } from "./NavBarStyles";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <NavBarStyles>
      <nav className="navigation">
        <ul className="navigation-menu">
          <li>
            <Link to="/">List</Link>
          </li>
          <li>
            <Link to="/">Map</Link>
          </li>
          <li>
            <Link to="/">My Account</Link>
          </li>
          <li>
            <Link to="/">Login</Link>
          </li>
        </ul>
        <div className="logo">
          <img src="/images/columpia.png" alt="columpia logo"></img>
        </div>
        <div className="hamburger">
          <RiMenuFill className="hamburguer--icon" />
        </div>
      </nav>
    </NavBarStyles>
  );
};

export default NavBar;
