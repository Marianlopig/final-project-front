import { render, screen } from "@testing-library/react";
import Spinner from "./Spinner";

describe("Given a spinner component", () => {
  describe("When it is instanted with show true", () => {
    test("Then it should render a div with class 'display-block'", () => {
      render(<Spinner show={true} />);

      const spinner = screen.getByTestId("spinner");

      expect(spinner).toBeInTheDocument();
    });
  });
});
