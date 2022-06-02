import styled from "styled-components";

export const NavBarStyles = styled.div`
  background-color: #0f4b4d80;
  box-shadow: 0 2px 2px 2px rgba(9, 9, 9, 0.23);
  .navigation {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100px;
    position: relative;

    .navigation-menu {
      display: flex;
      justify-content: flex-start;
      font-size: 25px;
      align-items: flex-end;
      column-gap: 40px;
      width: 70%;
      padding-left: 50px;
      li {
        display: flex;
        justify-content: space-between;
        list-style-type: none;
        font-weight: bold;

        a {
          text-decoration: none;
          color: #545454;
          display: block;
          width: 100%;
          :hover {
            color: #a6a6a6;
          }
        }
        img {
          width: 250px;
        }
      }
    }

    .login-icon {
      font-size: 60px;
    }

    .hamburger {
      height: 40px;
      width: 40px;
      padding: 5px;
      border-radius: 20%;
      background-color: #656565;
      cursor: pointer;
      transition: background-color 0.2s ease-in-out;
      position: absolute;
      top: 50%;
      left: 25px;
      transform: translateY(-50%);
      display: none;
      .hamburguer--icon {
        font-size: 40px;
      }

      :hover {
        background-color: #9f9f9f;
      }
    }

    .logo {
      margin-left: auto;
      margin-top: -45px;
      img {
        height: 200px;
      }
    }

    @media screen and (max-width: 768px) {
      .hamburger {
        display: block;
      }
      .navigation-menu {
        display: none;
      }
      .logo img {
        height: 125px;
        margin-top: 37px;
      }
    }
  }
`;
