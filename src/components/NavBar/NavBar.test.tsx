import { render, screen } from "@testing-library/react";
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
    });
  });
});
