import { mockParksPage } from "../../../mocks/ParksMocks";
import parkReducer, { loadParksActionCreator } from "./parkSlice";

describe("Given a parkSlice with an loadParkActionCreator", () => {
  describe("When we call the api", () => {
    test("Then it should return the list with all items", () => {
      const expectReturn = mockParksPage;
      const initialState = {
        page: 0,
        pageSize: 10,
        next: undefined,
        previous: undefined,
        total: 0,
        results: [],
      };

      const action = loadParksActionCreator(expectReturn);
      const newState = parkReducer(initialState, action);

      expect(newState).toEqual(expectReturn);
    });
  });
});
