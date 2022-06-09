import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import CreateParkPage from "./CreateParkPage";

describe("Given a Create Park Page component", () => {
  describe("When it is rendered", () => {
    test("Then it should render a heading input", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <CreateParkPage />
          </Provider>
        </BrowserRouter>
      );
      const heading = screen.getAllByRole("heading");

      expect(heading[0]).toBeInTheDocument();
    });
  });
});
