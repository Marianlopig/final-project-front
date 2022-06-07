import { mockPark } from "../../../mocks/ParksMocks";
import accountReducer, {
  addParkActionCreator,
  deleteParkActionCreator,
} from "./accountSlice";

describe("Given a account slice", () => {
  describe("When we execute the reducer deletePark", () => {
    test("Then it should return the new state without the deleted park", () => {
      const initialState = {
        name: "Marian",
        username: "marian",
        email: "test@test.com",
        city: "Barcelona",
        favParks: [],
        ownParks: [
          {
            id: "2",
            name: "parque bonito",
            description: "un parque muy bonito",
            photos: ["photo1.png", "photo2.png"],
            location: {
              type: "Point",
              coordinates: [4567, 5764],
            },
            details: ["aga", "bar"],
            owner: "1",
          },
          {
            id: "3",
            name: "parque feo",
            description: "un parque muy feo",
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

      const action = deleteParkActionCreator("3");
      const newState = accountReducer(initialState, action);

      expect(newState.ownParks.length).toEqual(1);
    });
  });
  describe("When we execute the reducer addPark", () => {
    test("Then it should return the new state with the new park", () => {
      const initialState = {
        name: "Marian",
        username: "marian",
        email: "test@test.com",
        city: "Barcelona",
        favParks: [],
        ownParks: [],
      };

      const action = addParkActionCreator(mockPark);
      const newState = accountReducer(initialState, action);

      expect(newState.ownParks.length).toEqual(1);
    });
  });
});
