import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import LoginPage from "./LoginPage";

describe("Given a LoginPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should render a password input", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginPage />
          </Provider>
        </BrowserRouter>
      );
      const password = screen.getByPlaceholderText("Password");

      expect(password).toBeInTheDocument();
    });
  });
});
