import { NavBarStyles } from "./NavBarStyles";
import { Link } from "react-router-dom";
import BurgerMenu from "../BurguerMenu/BurgerMenu";

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
            <Link to="/login">Login</Link>
          </li>
        </ul>
        <div className="logo">
          <img src="/images/columpiaDa.png" alt="columpia logo"></img>
        </div>
        <div className="hamburger">
          <BurgerMenu />
        </div>
      </nav>
    </NavBarStyles>
  );
};

export default NavBar;
