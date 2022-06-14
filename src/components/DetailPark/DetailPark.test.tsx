import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { mockPark } from "../../mocks/ParksMocks";
import store from "../../redux/store/store";
import DetailPark from "./DetailPark";

describe("Given a DetailPark component", () => {
  describe("When it is instanted", () => {
    test("Then it should render the park with details", () => {
      const park = mockPark;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <DetailPark park={park} />
          </Provider>
        </BrowserRouter>
      );

      const name = screen.getByText(park.name);
      const description = screen.getByText(park.description);

      expect(name).toBeInTheDocument();
      expect(description).toBeInTheDocument();
    });
  });
});
