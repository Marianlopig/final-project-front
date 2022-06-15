import { fireEvent, render, screen } from "@testing-library/react";
import { mockParksPage } from "../../mocks/ParksMocks";
import { loadParksThunk } from "../../redux/thunks/parkThunk/parkThunk";
import Pagination from "./Pagination";

const mockDispatch = jest.fn();

jest.mock("../../redux/hooks/hooks", () => ({
  useAppDispatch: () => mockDispatch,
  useAppSelector: () => ({ ...mockParksPage, next: "mockurl" }),
}));

describe("Given a pagination component", () => {
  describe("When click on next page and next page has value", () => {
    test("Then it should dispatch loadParksThunk", () => {
      render(<Pagination />);

      const buttonNext = screen.getByRole("button", { name: /next-page/ });

      fireEvent(
        buttonNext,
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
        })
      );

      loadParksThunk(undefined, "mockurl");
      expect(mockDispatch).toHaveBeenCalled();
    });
  });

  describe("When click on previous page and next page has value", () => {
    test("Then it should dispatch loadParksThunk", () => {});
  });
});
