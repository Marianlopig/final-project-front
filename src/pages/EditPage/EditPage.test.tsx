import { render, screen } from "@testing-library/react";
import EditPage from "./EditPage";
import { BrowserRouter } from "react-router-dom";
import { mockPark } from "../../mocks/ParksMocks";
const mockdispatch = jest.fn();
jest.mock("../../redux/hooks/hooks", () => ({
  useAppDispatch: () => mockdispatch,
  useAppSelector: () => mockPark,
}));
describe("Given an EditPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should dispatch the getparkthunk", () => {
      render(
        <BrowserRouter>
          <EditPage />
        </BrowserRouter>
      );
      expect(mockdispatch).toHaveBeenCalled();
      const editText = screen.getByText("Edit your park");
      expect(editText).toBeInTheDocument();
    });
  });
});
