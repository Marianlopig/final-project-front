import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import App from "./App";
import store from "./redux/store/store";

describe("Given an app component", () => {
  describe("When it is instanted", () => {
    test("Then it should render a navbar and a footer", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ToastContainer autoClose={3000} />
            <App />
          </Provider>
        </BrowserRouter>
      );

      const navList = screen.getByText("List");

      const buttonSubs = screen.getByRole("button", { name: "Subscribe" });

      expect(navList).toBeInTheDocument();
      expect(buttonSubs).toBeInTheDocument();
    });
  });
});
