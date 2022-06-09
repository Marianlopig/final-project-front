import { NavLink } from "react-router-dom";
import { BurgerMenuStyles } from "./BurgerMenuStyles";

const BurgerMenu = (): JSX.Element => {
  // const dispatch = useAppDispatch();
  // const navigate = useNavigate();

  // const logOut = () => {
  //   localStorage.removeItem("token");
  //   dispatch(logoutActionCreator());
  //   navigate("/login");
  // };

  return (
    <BurgerMenuStyles>
      <div className="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label className="menu__btn" htmlFor="menu__toggle">
          <span></span>
        </label>

        <ul className="menu__box">
          <li>
            <NavLink to={"/"}>
              <p className="menu__item">List</p>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/map"}>
              <p className="menu__item">Map</p>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/"}>
              <p className="menu__item">My Account</p>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/login"}>
              <p className="menu__item">Login</p>
            </NavLink>
          </li>
        </ul>
      </div>
    </BurgerMenuStyles>
  );
};

export default BurgerMenu;
