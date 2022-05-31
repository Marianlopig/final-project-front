import { rest } from "msw";

export const usersHandlers = [
  rest.post(
    "https://marian-lopez-back-final-project-202204.onrender.com/users/login",
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          token: "mocktoken",
        })
      );
    }
  ),
];
