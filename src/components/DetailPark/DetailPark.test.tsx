import { render, screen } from "@testing-library/react";
import { mockPark } from "../../mocks/ParksMocks";
import DetailPark from "./DetailPark";

describe("Given a DetailPark component", () => {
  describe("When it is instanted", () => {
    test("Then it should render the park details", () => {
      const park = mockPark;

      render(<DetailPark park={park} />);

      const name = screen.getByText(park.name);
      const description = screen.getByText(park.description);

      expect(name).toBeInTheDocument();
      expect(description).toBeInTheDocument();
    });
  });
});
