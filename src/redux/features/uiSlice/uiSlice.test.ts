import uiReducer, {
  loadingActionCreator,
  notLoadingActionCreator,
} from "./uiSlice";

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

describe("Given a uiSlice with an notloadingActionCreator", () => {
  describe("When we dispatch the notloading action", () => {
    test("Then it should return the new state with show spinner false", () => {
      const initialState = { showSpinner: true };
      const expected = { showSpinner: false };

      const action = notLoadingActionCreator();
      const newState = uiReducer(initialState, action);

      expect(newState).toEqual(expected);
    });
  });
});
