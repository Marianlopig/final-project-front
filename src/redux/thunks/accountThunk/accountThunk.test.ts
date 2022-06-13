import "../../../mocks/server";
import {
  addFavouriteActionCreator,
  deleteFavouriteActionCreator,
} from "../../features/accountSlice/accountSlice";
import { addFavouriteThunk, deleteFavouriteThunk } from "./accountThunk";

describe("Given an addFavouriteThunk function", () => {
  describe("When it is called", () => {
    test("Then it should dispatch addFavouriteActionCreator with an id", async () => {
      const dispatch = jest.fn();

      const expectedData = "parkid";

      const expectedAction = addFavouriteActionCreator(expectedData);

      const thunk = addFavouriteThunk(expectedData);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});

describe("Given an deleteFavouriteThunk function", () => {
  describe("When it is called", () => {
    test("Then it should dispatch deleteFavouriteActionCreator with an id", async () => {
      const dispatch = jest.fn();

      const expectedData = "parkid";

      const expectedAction = deleteFavouriteActionCreator(expectedData);

      const thunk = deleteFavouriteThunk(expectedData);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});
