import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import { registerThunk } from "../../redux/thunks/userThunk/userThunk";
import RegisterForm from "./RegisterForm";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
}));

jest.mock("../../redux/hooks/hooks", () => ({
  useAppDispatch: () => mockDispatch,
}));

jest.mock("../../redux/thunks/userThunk/userThunk", () => ({
  registerThunk: jest.fn(),
}));

describe("Given a Register component form", () => {
  describe("When it is rendered", () => {
    test("Then it should render a button and five inputs elements", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterForm />
          </Provider>
        </BrowserRouter>
      );
      const nameField = screen.getByPlaceholderText("Name");
      const usernameField = screen.getByPlaceholderText("Username");
      const passwordField = screen.getByPlaceholderText("Password");
      const emailField = screen.getByPlaceholderText("Email");
      const cityField = screen.getByPlaceholderText("City");

      const button = screen.getByRole("button");

      expect(nameField).toBeInTheDocument();
      expect(passwordField).toBeInTheDocument();
      expect(usernameField).toBeInTheDocument();
      expect(emailField).toBeInTheDocument();
      expect(cityField).toBeInTheDocument();

      expect(button).toBeInTheDocument();
    });
  });

  describe("When the user click on submit button with all fields filled", () => {
    test("Then it should dispatch register Thunk", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterForm />
          </Provider>
        </BrowserRouter>
      );

      const expectedFormData = {
        name: "Marian",
        username: "marianlop",
        password: "password",
        email: "email@email.com",
        city: "Barcelona",
      };
      const nameField = screen.getByPlaceholderText("Name");
      const usernameField = screen.getByPlaceholderText("Username");
      const passwordField = screen.getByPlaceholderText("Password");
      const emailField = screen.getByPlaceholderText("Email");
      const cityField = screen.getByPlaceholderText("City");

      const button = screen.getByRole("button");

      userEvent.type(nameField, "Marian");
      userEvent.type(passwordField, "password");
      userEvent.type(usernameField, "marianlop");
      userEvent.type(emailField, "email@email.com");
      userEvent.type(cityField, "Barcelona");

      userEvent.click(button);

      expect(registerThunk).toHaveBeenCalledWith(expectedFormData);
      expect(mockDispatch).toHaveBeenCalledWith(
        registerThunk(expectedFormData)
      );
    });
  });
});
