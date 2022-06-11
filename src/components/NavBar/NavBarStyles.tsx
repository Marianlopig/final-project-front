import styled from "styled-components";

export const NavBarStyles = styled.div`
  .navigation {
    height: 60px;
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    position: fixed;
    padding: 0.5rem 0rem;
    background-color: #fff;
    color: #545656;
    box-shadow: 0 2px 2px 2px rgba(9, 9, 9, 0.23);
    z-index: 99999;
    white-space: nowrap;

    .navigation-menu {
      font-size: 20px;
      width: 100%;
      font-weight: bold;
      display: inset-block;
      margin-right: 50px;
      ul {
        display: flex;
        padding: 0;
        float: left;

        li {
          display: flex;
          width: 100%;
          list-style-type: none;
          margin: 0 1rem;
          cursor: pointer;
          :hover {
            color: #a6a6a6;
          }
          a {
            text-decoration: none;
            color: inherit;
          }
          img {
            width: 250px;
          }
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
      display: flex;
      align-items: center;
      justify-content: center;
      padding-right: 20px;
      .logolink {
        display: flex;
        img {
          height: 80px;
          display: flex;
        }
      }
    }

    @media screen and (max-width: 768px) {
      .hamburger {
        display: block;
      }

      .navigation-menu {
        display: none;
      }
      .navigation-menu.expanded {
        display: block;
        z-index: 10;
        color: #545656;
      }
      .logo img {
        height: 70px;
      }
      ul {
        position: absolute;
        top: 55px;
        left: 0;
        display: none;
        flex-direction: column;
        width: 70%;
        height: calc(100vh - 77px);
        background-color: white;
        z-index: 99999;

        li {
          text-align: center;
          margin: 0;
          color: #545656;
          width: 100%;
          padding: 1.5rem 0;
          justify-content: center;

          :hover {
            background-color: #eee;
            color: #9a9b9b;
          }
        }
      }
    }
  }
`;
