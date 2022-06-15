import "../../../mocks/server";
import {
  addFavouriteActionCreator,
  deleteFavouriteActionCreator,
  loadAccountActionCreator,
} from "../../features/accountSlice/accountSlice";
import {
  addFavouriteThunk,
  deleteFavouriteThunk,
  loadAccountThunk,
} from "./accountThunk";
import { toast } from "react-toastify";
import { server } from "../../../mocks/server";
import { rest } from "msw";

jest.mock("react-toastify");

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

  describe("When it has an error", () => {
    test("Then it should throw a toast with an error 'Error adding the park to favoruites'", async () => {
      toast.error = jest.fn();

      server.use(
        rest.put(
          `${process.env.REACT_APP_API_URL}/users/addfavourite`,
          (req, res, ctx) => {
            return res(ctx.status(400), ctx.json({}));
          }
        )
      );

      const idMockPark = "629f8aec8c2b3037ff6aeb4d";

      await addFavouriteThunk(idMockPark)(jest.fn());

      expect(toast.error).toHaveBeenCalled();
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

  describe("When it has an error", () => {
    test("Then it should throw a toast with an error 'Error deleting the park from favoruites'", async () => {
      toast.error = jest.fn();

      server.use(
        rest.put(
          `${process.env.REACT_APP_API_URL}/users/deletefavourite`,
          (req, res, ctx) => {
            return res(ctx.status(400), ctx.json({}));
          }
        )
      );

      const idMockPark = "629f8aec8c2b3037ff6aeb4d";

      await deleteFavouriteThunk(idMockPark)(jest.fn());

      expect(toast.error).toHaveBeenCalled();
    });
  });
});

describe("Given an loadAccount function", () => {
  describe("When it is called", () => {
    test("Then it should dispatch loadAccountActionCreator with an account", async () => {
      const dispatch = jest.fn();

      const expectedData = {
        id: "1234",
        name: "Test user",
        username: "testuser",
        email: "testemail",
        city: "barcelona",
        favParks: [],
      };

      const expectedAction = loadAccountActionCreator(expectedData);

      const thunk = loadAccountThunk();
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});
