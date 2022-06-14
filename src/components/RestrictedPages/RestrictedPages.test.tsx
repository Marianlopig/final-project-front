import { render, screen } from "@testing-library/react";
import RestrictedPages from "./RestrictedPages";

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockUseNavigate,
}));

describe("Given a Controller function", () => {
  describe("When it's invoked", () => {
    test("Then it should navigate to the login when the user is not logged", () => {
      render(
        <RestrictedPages>
          <h1>Hello</h1>
        </RestrictedPages>
      );

      expect(mockUseNavigate).toHaveBeenCalledWith("/login");
    });

    test("Then it should render its children when the user is logged", () => {
      localStorage.setItem("token", "patata");

      render(
        <RestrictedPages>
          <h1>Hello</h1>
        </RestrictedPages>
      );

      const header = screen.getByRole("heading", { name: "Hello" });

      expect(header).toBeInTheDocument();
    });
  });
});
