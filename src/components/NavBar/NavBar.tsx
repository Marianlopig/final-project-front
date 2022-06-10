import { NavBarStyles } from "./NavBarStyles";
import { Link } from "react-router-dom";
import { RiMenuFill } from "react-icons/ri";
import { useState } from "react";

const NavBar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState<boolean>(false);

  return (
    <NavBarStyles>
      <nav className="navigation">
        <div className="logo">
          <Link className="logolink" to="/">
            <img src="/images/columpiaDa.png" alt="columpia logo"></img>
          </Link>
        </div>
        <div
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <RiMenuFill className="hamburguer--icon" />
        </div>
        <div className={`navigation-menu${isNavExpanded ? " expanded" : ""}`}>
          <ul>
            <li
              onClick={() => {
                setIsNavExpanded(!isNavExpanded);
              }}
            >
              <Link to="/">List</Link>
            </li>
            <li
              onClick={() => {
                setIsNavExpanded(!isNavExpanded);
              }}
            >
              <Link to="/">Map</Link>
            </li>
            <li
              onClick={() => {
                setIsNavExpanded(!isNavExpanded);
              }}
            >
              <Link to="/">My Account</Link>
            </li>
            <li
              onClick={() => {
                setIsNavExpanded(!isNavExpanded);
              }}
            >
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    </NavBarStyles>
  );
};

export default NavBar;
