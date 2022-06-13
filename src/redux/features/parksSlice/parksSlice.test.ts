import { mockParksPage } from "../../../mocks/ParksMocks";
import parkReducer, {
  filterCityActionCreator,
  filterFavActionCreator,
  filterOwnerActionCreator,
  loadParksActionCreator,
} from "./parksSlice";

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
        filters: {},
        results: [],
      };

      const action = loadParksActionCreator(expectReturn);
      const newState = parkReducer(initialState, action);

      expect(newState).toEqual(expectReturn);
    });
  });
});

describe("Given a parkSlice with a filter reducer", () => {
  describe("When we dispatch the filterOwner", () => {
    test("Then it should update the state with the filter", () => {
      const expectReturn = {
        page: 0,
        pageSize: 10,
        next: undefined,
        previous: undefined,
        total: 0,
        filters: { owner: "12345" },
        results: [],
      };
      const initialState = {
        page: 0,
        pageSize: 10,
        next: undefined,
        previous: undefined,
        total: 0,
        filters: {},
        results: [],
      };

      const action = filterOwnerActionCreator("12345");
      const newState = parkReducer(initialState, action);

      expect(newState).toEqual(expectReturn);
    });
  });

  describe("When we dispatch the filterCity", () => {
    test("Then it should update the state with the filter", () => {
      const expectReturn = {
        page: 0,
        pageSize: 10,
        next: undefined,
        previous: undefined,
        total: 0,
        filters: { city: "Barcelona" },
        results: [],
      };
      const initialState = {
        page: 0,
        pageSize: 10,
        next: undefined,
        previous: undefined,
        total: 0,
        filters: {},
        results: [],
      };

      const action = filterCityActionCreator("Barcelona");
      const newState = parkReducer(initialState, action);

      expect(newState).toEqual(expectReturn);
    });
  });
  describe("When we dispatch the filterFav", () => {
    test("Then it should update the state with the filter", () => {
      const expectReturn = {
        page: 0,
        pageSize: 10,
        next: undefined,
        previous: undefined,
        total: 0,
        filters: { ids: "12345,12345" },
        results: [],
      };
      const initialState = {
        page: 0,
        pageSize: 10,
        next: undefined,
        previous: undefined,
        total: 0,
        filters: {},
        results: [],
      };

      const action = filterFavActionCreator("12345,12345");
      const newState = parkReducer(initialState, action);

      expect(newState).toEqual(expectReturn);
    });
  });
});
