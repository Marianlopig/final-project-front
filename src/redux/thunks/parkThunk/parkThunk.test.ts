import { rest } from "msw";
import { toast } from "react-toastify";
import { mockPark, mockParksPage } from "../../../mocks/ParksMocks";
import "../../../mocks/server";
import server from "../../../mocks/server";
import {} from "../../features/accountSlice/accountSlice";
import { loadParkDetailsActionCreator } from "../../features/parkSlice/parkSlice";
import { loadParksActionCreator } from "../../features/parksSlice/parksSlice";
import {
  loadingActionCreator,
  notLoadingActionCreator,
} from "../../features/uiSlice/uiSlice";
import {
  createParkThunk,
  deleteParkThunk,
  editParkThunk,
  getParkDetailThunk,
  loadParksThunk,
} from "./parkThunk";

jest.mock("react-toastify");

describe("Given a loadParks function", () => {
  describe("When it is called", () => {
    test("It should dispatch loadParksActionCreator with the list of all parks", async () => {
      const dispatch = jest.fn();
      const parkColectionData = mockParksPage;
      const loadColectionAction = loadParksActionCreator(parkColectionData);
      const thunk = loadParksThunk({
        city: "Barcelona",
        ids: "123",
        owner: "123",
      });
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(loadColectionAction);
    });
  });

  describe("When it is called with an empty filter", () => {
    test("It should dispatch loadParksActionCreator with the list of all parks not filtered", async () => {
      const dispatch = jest.fn();
      const parkColectionData = mockParksPage;
      const loadColectionAction = loadParksActionCreator(parkColectionData);
      const thunk = loadParksThunk({});
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

      expect(dispatch).toHaveBeenCalledWith(loadingActionCreator());
      expect(dispatch).toHaveBeenCalledWith(notLoadingActionCreator());
    });
  });

  describe("When it is called with invalid data", () => {
    test("It should call the toast.error", async () => {
      const dispatch = jest.fn();
      toast.error = jest.fn();

      server.use(
        rest.delete(
          `${process.env.REACT_APP_API_URL}/parks/4`,
          (req, res, ctx) => {
            return res(ctx.status(201), ctx.json({}));
          }
        )
      );

      await deleteParkThunk("4")(dispatch);

      expect(toast.error).toHaveBeenCalled();
    });
  });
});

describe("Given a createPark function", () => {
  describe("When it is called with a park", () => {
    test("Then it should dispatch the addParkActionCreator with the park", async () => {
      const dispatch = jest.fn();
      const thunk = createParkThunk(mockPark);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(loadingActionCreator());
      expect(dispatch).toHaveBeenCalledWith(notLoadingActionCreator());
    });
  });

  describe("When it is called with invalid data", () => {
    test("It should call the toast.error", async () => {
      const dispatch = jest.fn();
      toast.error = jest.fn();

      server.use(
        rest.post(
          `${process.env.REACT_APP_API_URL}/parks/`,
          (req, res, ctx) => {
            return res(ctx.status(208), ctx.json({}));
          }
        )
      );

      await createParkThunk(mockPark)(dispatch);

      expect(toast.error).toHaveBeenCalled();
    });
  });
});

describe("Given a getParkDetailThunk function", () => {
  describe("When it is called", () => {
    test("It should dispatch loadParkDetailsActionCreator with the park details", async () => {
      const dispatch = jest.fn();
      const parkData = mockPark;
      const loadParkData = loadParkDetailsActionCreator(parkData);
      const thunk = getParkDetailThunk("629f8aec8c2b3037ff6aeb4d");
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(loadParkData);
    });
  });

  describe("When it is called with invalid data", () => {
    test("It should call the toast.error", async () => {
      const dispatch = jest.fn();
      toast.error = jest.fn();

      server.use(
        rest.put(
          `${process.env.REACT_APP_API_URL}/parks/629f8aec8c2b3037ff6aeb4d`,
          (req, res, ctx) => {
            return res(ctx.status(400), ctx.json(mockPark));
          }
        )
      );

      await editParkThunk(mockPark)(dispatch);

      expect(toast.error).toHaveBeenCalled();
    });
  });
});

describe("Given a editParkThunk function", () => {
  describe("When it is called", () => {
    test("Then it should dispatch the editParkThunk with the edited park", async () => {
      const dispatch = jest.fn();
      const parkData = mockPark;

      const thunk = editParkThunk(parkData);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
