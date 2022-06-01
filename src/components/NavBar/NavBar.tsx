import { VscAccount } from "react-icons/vsc";

const NavBar = () => {
  return (
    <div>
      <ul>
        <li>Home</li>
        <li>List</li>
        <li>Map</li>
        <li>My Account</li>
        <li>Login</li>
      </ul>
      <VscAccount />
      <img src="/images/columpia.png" alt="columpia logo"></img>
    </div>
  );
};

export default NavBar;
