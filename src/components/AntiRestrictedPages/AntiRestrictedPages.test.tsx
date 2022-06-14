import { render, screen } from "@testing-library/react";
import AntiRestrictedPages from "./AntiRestrictedPages";

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockUseNavigate,
}));

describe("Given a Controller function", () => {
  describe("When it's invoked", () => {
    test("Then it should navigate to the login when the user is not logged", () => {
      localStorage.setItem("token", "patata");

      render(
        <AntiRestrictedPages>
          <h1>Hello</h1>
        </AntiRestrictedPages>
      );

      expect(mockUseNavigate).toHaveBeenCalledWith("/parks");
    });

    test("Then it should render its children when the user is logged", () => {
      render(
        <AntiRestrictedPages>
          <h1>Hello</h1>
        </AntiRestrictedPages>
      );

      const header = screen.getByRole("heading", { name: "Hello" });

      expect(header).toBeInTheDocument();
    });
  });
});
