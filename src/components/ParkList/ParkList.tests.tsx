import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import ParkList from "./ParkList";

describe("Given a ParkList component", () => {
  describe("When it is instanted", () => {
    test("Then it should render a ul html element", () => {
      const parks = {
        page: 0,
        pageSize: 10,
        next: undefined,
        previous: undefined,
        total: 0,
        results: [
          {
            id: "2",
            name: "parque bonito",
            description: "un parque muy bonito",
            photos: ["photo1.png, photo2.png"],
            location: {
              type: "Point",
              coordinates: [4567, 5764],
            },
            details: ["aga", "bar"],
            owner: "1",
          },
        ],
      };

      render(
        <BrowserRouter>
          <Provider store={store}>
            <ParkList results={parks.results} />
          </Provider>
        </BrowserRouter>
      );

      const picture = screen.getByRole("img");

      expect(picture).toBeInTheDocument();
    });
  });
});
