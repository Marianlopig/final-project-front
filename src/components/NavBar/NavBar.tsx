import { NavBarStyles } from "./NavBarStyles";
import { Link, useNavigate } from "react-router-dom";
import { RiMenuFill } from "react-icons/ri";
import { useState } from "react";
import { logoutActionCreator } from "../../redux/features/authSlice/authSlice";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { logoutAccountActionCreator } from "../../redux/features/accountSlice/accountSlice";

const NavBar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState<boolean>(false);
  const token = localStorage.getItem("token");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const deleteToken = () => {
    localStorage.removeItem("token");
  };

  return (
    <NavBarStyles>
      <nav className="navigation">
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
              {token ? (
                <Link to="/newpark">Create Park</Link>
              ) : (
                <Link to="/new-user">Register</Link>
              )}
            </li>
            <li
              onClick={() => {
                setIsNavExpanded(!isNavExpanded);
                if (token) {
                  dispatch(logoutActionCreator());
                  dispatch(logoutAccountActionCreator());
                  deleteToken();
                } else {
                  navigate("/login");
                }
              }}
            >
              {token ? "LogOut" : "LogIn"}
            </li>
          </ul>
        </div>
        <div className="logo">
          <Link className="logolink" to="/">
            <img src="/images/columpiaDa.png" alt="columpia logo"></img>
          </Link>
        </div>
      </nav>
    </NavBarStyles>
  );
};

export default NavBar;
