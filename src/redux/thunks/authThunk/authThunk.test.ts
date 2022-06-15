import { server } from "../../../mocks/server";
import { loginActionCreator } from "../../features/authSlice/authSlice";
import { loginThunk, registerThunk } from "./authThunk";
import { rest } from "msw";
import { toast } from "react-toastify";

jest.mock("jwt-decode", () => () => ({
  username: "marian",
  name: "marian",
  userId: "1",
}));

jest.mock("react-toastify");

describe("Given a loginThunk function", () => {
  describe("When it is called", () => {
    test("It should dispatch loginActionCreator with the data from the token", async () => {
      const dispatch = jest.fn();

      const expectedData = {
        username: "marian",
        name: "marian",
        userId: "1",
      };
      const userData = {
        username: "marian",
        password: "password",
        name: "marian",
        email: "test",
        city: "Barcelona",
      };

      const expectedAction = loginActionCreator(expectedData);

      const thunk = loginThunk(userData);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });

  describe("When it is called with invalid data", () => {
    test("It should call the toast.error", async () => {
      const dispatch = jest.fn();
      toast.error = jest.fn();

      server.use(
        rest.post(
          `${process.env.REACT_APP_API_URL}/users/login`,
          (req, res, ctx) => {
            return res(
              ctx.status(400),
              ctx.json({
                token: "mocktoken",
              })
            );
          }
        )
      );

      const userData = {
        username: "marian",
        password: "password",
        name: "marian",
        email: "test",
        city: "Barcelona",
      };

      await loginThunk(userData)(dispatch);

      expect(toast.error).toHaveBeenCalled();
    });
  });
});

describe("Given a RegisterThunk function", () => {
  describe("When it is called", () => {
    test("It should dispatch the register thunk with the user data", async () => {
      const dispatch = jest.fn();

      const userData = {
        username: "marian",
        password: "password",
        name: "marian",
        email: "test",
        city: "Barcelona",
      };

      const thunk = registerThunk(userData);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When it is called with invalid data", () => {
    test("It should call the toast.error", async () => {
      toast.error = jest.fn();

      server.use(
        rest.post(
          `${process.env.REACT_APP_API_URL}/users/register`,
          (req, res, ctx) => {
            return res(ctx.status(400), ctx.json({}));
          }
        )
      );

      const userData = {
        username: "marian",
        password: "password",
        name: "marian",
        email: "test",
        city: "Barcelona",
      };

      await registerThunk(userData)(jest.fn());

      expect(toast.error).toHaveBeenCalled();
    });
  });
});
