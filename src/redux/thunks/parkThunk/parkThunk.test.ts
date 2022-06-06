import "../../../mocks/server";
import { deleteParkActionCreator } from "../../features/accountSlice/accountSlice";
import { loadParksActionCreator } from "../../features/parksSlice/parkSlice";
import { deleteParkThunk, loadParksThunk } from "./parkThunk";

describe("Given a loadParks function", () => {
  describe("When it is called", () => {
    test("It should dispatch loadParksActionCreator with the list of all parks", async () => {
      const dispatch = jest.fn();
      const parkColectionData = {
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
              type: {
                type: "elpunto",
                enum: ["Point"],
              },
              coordinates: {
                type: [4567, 5764],
              },
            },
            details: ["aga", "bar"],
            owner: "1",
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

describe("Given a deletePark function", () => {
  describe("When it is called with an id to delete", () => {
    test("Then it should dispatch th deleteParkActionCreator with an id", async () => {
      const dispatch = jest.fn();
      const thunk = deleteParkThunk("8");
      await thunk(dispatch);
      const action = deleteParkActionCreator("8");

      expect(dispatch).toHaveBeenCalledWith(action);
    });
  });
});
