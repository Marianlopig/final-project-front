import userReducer, { loginActionCreator } from "./userSlice";

describe("Given a authSlice with an loginActionCreator", () => {
  describe("When we do a login with a value username and a password", () => {
    test("Then it should return the username", () => {
      const userLoged = { username: "Marian", name: "Marian" };
      const expectReturn = { username: "Marian", name: "Marian" };
      const initialState = { username: "", name: "" };

      const action = loginActionCreator(userLoged);
      const newState = userReducer(initialState, action);

      expect(newState).toEqual(expectReturn);
    });
  });
});
