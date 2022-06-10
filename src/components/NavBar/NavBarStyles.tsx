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
    color: black;
    box-shadow: 0 2px 2px 2px rgba(9, 9, 9, 0.23);
    z-index: 99999;

    .navigation-menu {
      display: flex;
      font-size: 25px;
      column-gap: 40px;
      width: 70%;
      padding-left: 50px;
      width: 100%;
      font-weight: bold;
      background-color: ;

      ul {
        display: flex;
        padding: 0;

        li {
          list-style-type: none;
          margin: 0 1rem;

          a {
            text-decoration: none;
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
        margin-top: 15px;
        z-index: 10;
        color: black;
      }
      .logo img {
        height: 70px;
      }
      ul {
        position: absolute;
        top: 40px;
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

          :hover {
            background-color: #eee;
          }

          a {
            color: black;
            width: 100%;
            padding: 1.5rem 0;
          }
        }
      }
    }
  }
`;
