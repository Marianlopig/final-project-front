import { fireEvent, render, screen } from "@testing-library/react";
import { mockParksPage } from "../../mocks/ParksMocks";
import Pagination from "./Pagination";

const mockDispatch = jest.fn();

jest.mock("../../redux/hooks/hooks", () => ({
  useAppDispatch: () => mockDispatch,
  useAppSelector: () => ({
    ...mockParksPage,
    next: "mockurl",
    previous: "mockPrevious",
  }),
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

      const buttons = screen.getAllByRole("button");
      buttons.forEach((button) => fireEvent.click(button));

      expect(mockDispatch).toHaveBeenCalled();
    });
  });

  describe("When click on previous page and next page has value", () => {
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

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
