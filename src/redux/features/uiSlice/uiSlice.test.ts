import uiReducer, { loadingActionCreator } from "./uiSlice";

describe("Given a uiSlice with an loadingActionCreator", () => {
  describe("When we dispatch the loading action", () => {
    test("Then it should return the new state with show spinner true", () => {
      const initialState = { showSpinner: false };
      const expected = { showSpinner: true };

      const action = loadingActionCreator();
      const newState = uiReducer(initialState, action);

      expect(newState).toEqual(expected);
    });
  });
});
