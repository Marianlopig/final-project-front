import "../../../mocks/server";
import { loadParksActionCreator } from "../../features/parksSlice/parkSlice";
import { loadParksThunk } from "./parkThunk";

describe("Given a loadParks function", () => {
  describe("When it is called", () => {
    test("It should dispatch loadParksActionCreator with the list of all parks", async () => {
      const dispatch = jest.fn();
      const parkColectionData = {
        page: 0,
        pageSize: 10,
        next: undefined,
        previous: undefined,
        total: 1,
        results: [
          {
            id: "1",
            name: "Parque Bonito",
            description: "Un parque grande con muchas plantas",
            photos: ["photo.png"],
            location: {
              type: "Point",
              coordinates: [46574, 5478],
            },
            details: ["agua", "fuentes"],
            owner: "",
          },
        ],
      };
      const loadColectionAction = loadParksActionCreator(parkColectionData);
      const thunk = loadParksThunk();
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(loadColectionAction);
    });
  });
});
