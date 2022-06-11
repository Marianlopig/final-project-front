import userReducer, {
  loginActionCreator,
  logoutActionCreator,
} from "./authSlice";

describe("Given a userSlice with an loginActionCreator", () => {
  describe("When we do a login with a value username and a password", () => {
    test("Then it should return the username and the name", () => {
      const userLoged = { username: "Marian", name: "Marian", userId: "1" };
      const expectReturn = { username: "Marian", name: "Marian", userId: "1" };
      const initialState = { username: "", name: "", userId: "" };

      const action = loginActionCreator(userLoged);
      const newState = userReducer(initialState, action);

      expect(newState).toEqual(expectReturn);
    });
  });
});

describe("Given a userSlice with an logoutActionCreator", () => {
  describe("When we do a logout", () => {
    test("Then it should return the properties empty", () => {
      const initialState = { username: "", name: "", userId: "" };
      const expectedResult = { username: "", name: "", userId: "" };

      const action = logoutActionCreator();
      const newState = userReducer(initialState, action);

      expect(newState).toEqual(expectedResult);
    });
  });
});
