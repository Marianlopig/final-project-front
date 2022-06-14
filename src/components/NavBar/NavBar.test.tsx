/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import NavBar from "./NavBar";

describe("Given a HeaderComponent Component", () => {
  describe("When it's call", () => {
    test("Then it should render a HeaderComponent with 2 li item", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <NavBar />
          </Provider>
        </BrowserRouter>
      );

      const expectedNumOfLi = 4;

      const totalList = screen.getAllByRole("listitem");

      expect(totalList.length).toBe(expectedNumOfLi);

      const loginButton = screen.getByText("LogIn");
      expect(loginButton).toBeInTheDocument();

      fireEvent(
        loginButton,
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
        })
      );
    });
  });

  describe("When click in the hamburger", () => {
    test("Then it should render expand the menu", () => {
      const { container } = render(
        <BrowserRouter>
          <Provider store={store}>
            <NavBar />
          </Provider>
        </BrowserRouter>
      );

      const hamburgerButton = container.getElementsByClassName("hamburger")[0];
      expect(hamburgerButton).toBeInTheDocument();

      fireEvent(
        hamburgerButton,
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
        })
      );
    });
  });
});
