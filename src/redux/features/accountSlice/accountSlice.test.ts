import accountReducer, {
  addFavouriteActionCreator,
  deleteFavouriteActionCreator,
  loadAccountActionCreator,
} from "./accountSlice";

describe("Given a account slice", () => {
  describe("When we execute the reducer deleteFavourite", () => {
    test("Then it should return the new state without the deleted park", () => {
      const initialState = {
        id: "1",
        name: "Marian",
        username: "marian",
        email: "test@test.com",
        city: "Barcelona",
        favParks: ["1"],
        loggedIn: true,
      };

      const action = deleteFavouriteActionCreator("1");
      const newState = accountReducer(initialState, action);

      expect(newState.favParks.length).toEqual(0);
    });
  });
  describe("When we execute the reducer addFavouritePark", () => {
    test("Then it should return the new state with the new park in fav", () => {
      const initialState = {
        id: "1",
        name: "Marian",
        username: "marian",
        email: "test@test.com",
        city: "Barcelona",
        favParks: ["1"],
        loggedIn: true,
      };

      const idFavouritePark = "2";

      const action = addFavouriteActionCreator(idFavouritePark);
      const newState = accountReducer(initialState, action);

      expect(newState.favParks.length).toEqual(2);
    });
  });

  describe("When we execute the reducer loadAccount", () => {
    test("Then it should return the new state account", () => {
      const initialState = {
        id: "",
        name: "",
        username: "",
        email: "",
        city: "",
        favParks: [],
        loggedIn: false,
      };

      const payload = {
        id: "1",
        name: "Marian",
        username: "marian",
        email: "test@test.com",
        city: "Barcelona",
        favParks: ["1"],
        loggedIn: true,
      };

      const action = loadAccountActionCreator(payload);
      const newState = accountReducer(initialState, action);

      expect(newState).toEqual(payload);
    });
  });
});
