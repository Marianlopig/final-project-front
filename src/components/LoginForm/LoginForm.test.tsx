import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import LoginForm from "./LoginForm";
import store from "../../redux/store/store";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { loginThunk } from "../../redux/thunks/authThunk/authThunk";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
}));

jest.mock("../../redux/hooks/hooks", () => ({
  useAppDispatch: () => mockDispatch,
}));

jest.mock("../../redux/thunks/authThunk/authThunk", () => ({
  loginThunk: jest.fn(),
}));

describe("Given a Login form component", () => {
  describe("When it is rendered", () => {
    test("Then it should render a button, two inputs element", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginForm />
          </Provider>
        </BrowserRouter>
      );
      const userField = screen.getByPlaceholderText("Username");
      const passwordField = screen.getByPlaceholderText("Password");
      const button = screen.getByRole("button");

      expect(userField).toBeInTheDocument();
      expect(passwordField).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });
  describe("When the user click on submit button with all fields filled", () => {
    test("Then it should dispatch login thunk", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginForm />
          </Provider>
        </BrowserRouter>
      );

      const expectedFormData = {
        username: "Marian",
        password: "password",
      };

      const userField = screen.getByPlaceholderText("Username");
      const passwordField = screen.getByPlaceholderText("Password");
      const button = screen.getByRole("button");

      userEvent.type(userField, "Marian");
      userEvent.type(passwordField, "password");

      userEvent.click(button);

      expect(loginThunk).toHaveBeenCalledWith(expectedFormData);
      expect(mockDispatch).toHaveBeenCalledWith(loginThunk(expectedFormData));
    });
  });
});
