import { rest } from "msw";

export const usersHandlers = [
  rest.post(`${process.env.REACT_APP_API_URL}/users/login`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        token: "mocktoken",
      })
    );
  }),
  rest.post(
    `${process.env.REACT_APP_API_URL}/users/register`,
    (req, res, ctx) => {
      return res(
        ctx.status(201),
        ctx.json({
          username: "marianlop",
        })
      );
    }
  ),
];
