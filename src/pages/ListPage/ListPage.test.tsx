import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import ListParkPage from "./ListParkPage";

describe("Given a List Park Page component", () => {
  describe("When it is rendered", () => {
    test("Then it should render a heading input", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ListParkPage />
          </Provider>
        </BrowserRouter>
      );
      const heading = screen.getByRole("heading");

      expect(heading).toBeInTheDocument();
    });
  });
});
