import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import NotFoundPage from "./NotFoundPage";

describe("Given a NotFoundPage", () => {
  describe("When it is rendered", () => {
    test("Then it should render an img, a heading and a button", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <NotFoundPage />
          </Provider>
        </BrowserRouter>
      );

      const img = screen.getByRole("img");
      const button = screen.getByRole("button");
      const heading = screen.getByRole("heading");

      expect(img).toBeInTheDocument();
      expect(button).toBeInTheDocument();
      expect(heading).toBeInTheDocument();
    });
  });
});
