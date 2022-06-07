import { mockPark, mockParksPage } from "../../../mocks/ParksMocks";
import "../../../mocks/server";
import {
  addParkActionCreator,
  deleteParkActionCreator,
} from "../../features/accountSlice/accountSlice";
import { loadParksActionCreator } from "../../features/parksSlice/parkSlice";
import {
  loadingActionCreator,
  notLoadingActionCreator,
} from "../../features/uiSlice/uiSlice";
import { createParkThunk, deleteParkThunk, loadParksThunk } from "./parkThunk";

describe("Given a loadParks function", () => {
  describe("When it is called", () => {
    test("It should dispatch loadParksActionCreator with the list of all parks", async () => {
      const dispatch = jest.fn();
      const parkColectionData = mockParksPage;
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

describe("Given a createPark function", () => {
  describe("When it is called with a park", () => {
    test("Then it should dispatch the addParkActionCreator with the park", async () => {
      const dispatch = jest.fn();
      const thunk = createParkThunk(mockPark);
      await thunk(dispatch);
      const action = addParkActionCreator(mockPark);

      expect(dispatch).toHaveBeenCalledWith(loadingActionCreator());
      expect(dispatch).toHaveBeenCalledWith(action);
      expect(dispatch).toHaveBeenCalledWith(notLoadingActionCreator());
    });
  });
});
