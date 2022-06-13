import { mockPark } from "../../../mocks/ParksMocks";
import parkReducer, { loadParkDetailsActionCreator } from "./parkSlice";

describe("Given a parkSlice with an loadParkDetailsActionCreator", () => {
  describe("When we call the api", () => {
    test("Then it should return all props from the park selected", () => {
      const expectReturn = mockPark;
      const initialState = {
        id: "",
        name: "",
        description: "",
        photos: [],
        photosBackup: [],
        location: {
          type: "",
          coordinates: [],
        },
        details: [],
        owner: "",
        address: {
          city: "",
          address: "",
        },
      };

      const action = loadParkDetailsActionCreator(mockPark);
      const newState = parkReducer(initialState, action);

      expect(newState).toEqual(expectReturn);
    });
  });
});
