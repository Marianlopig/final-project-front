import styled from "styled-components";

export const BurgerMenuStyles = styled.div`
  #menu__toggle {
    opacity: 0;
  }
  #menu__toggle:checked + .menu__btn > span {
    transform: rotate(45deg);
  }
  #menu__toggle:checked + .menu__btn > span::before {
    top: 0;
    transform: rotate(0deg);
  }
  #menu__toggle:checked + .menu__btn > span::after {
    top: 0;
    transform: rotate(90deg);
  }
  #menu__toggle:checked ~ .menu__box {
    left: 0;
  }
  .menu__btn {
    position: fixed;
    top: 20px;
    left: 20px;
    width: 42px;
    height: 50px;
    cursor: pointer;
    z-index: 1;
  }
  .menu__btn > span,
  .menu__btn > span::before,
  .menu__btn > span::after {
    display: block;
    position: absolute;
    width: 100%;
    height: 5px;
    background-color: white;
    transition-duration: 0.25s;
  }
  .menu__btn > span::before {
    content: "";
    top: -13px;
  }
  .menu__btn > span::after {
    content: "";
    top: 13px;
  }
  .menu__box {
    display: block;
    position: fixed;
    top: -10px;
    left: -100%;
    width: 300px;
    height: 100%;
    margin: 0;
    padding: 80px 0;
    list-style: none;
    background-color: #000000ee;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
    transition-duration: 0.25s;
  }
  .menu__item {
    display: block;
    padding: 16px 24px;
    color: white;
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    font-weight: 600;
    text-decoration: none;
    transition-duration: 0.25s;
  }
  .categories {
    font-family: "Roboto", sans-serif;
    &__title {
      font-weight: 600;
      padding: 16px 24px 7px 24px;
      font-size: 20px;
    }
    &__item {
      padding: 10px 24px;
      font-size: 20px;
      cursor: pointer;
    }
  }
  .logout {
    cursor: pointer;
  }
  .menu__item:hover,
  .categories__item:hover {
    background-color: #cfd8dc;
  }
  a {
    text-decoration: none;
  }
`;
