import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import Filters from "./Filters";

const mockDispatch = jest.fn();
jest.mock("../../redux/hooks/hooks", () => ({
  useAppDispatch: () => mockDispatch,
  useAppSelector: () => ({
    userId: "1",
    favParks: ["1", "2"],
  }),
}));

jest.mock("../../redux/thunks/parkThunk/parkThunk", () => ({
  loadParksThunk: jest.fn(),
}));

describe("Given a Filters component", () => {
  describe("When it is instanted", () => {
    test("Then it should render the filter options", () => {
      localStorage.setItem("token", "123");
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Filters />
          </Provider>
        </BrowserRouter>
      );

      const buttonFavs = screen.getByRole("button", { name: "My Favourites" });
      const buttonOwn = screen.getByRole("button", {
        name: "Created by me",
      });

      expect(buttonFavs).toBeInTheDocument();
      expect(buttonOwn).toBeInTheDocument();

      fireEvent(
        buttonFavs,
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
        })
      );

      expect(mockDispatch).toBeCalled();

      fireEvent(
        buttonOwn,
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
        })
      );
      expect(mockDispatch).toBeCalled();
    });
  });
});
