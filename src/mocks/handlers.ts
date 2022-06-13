import { rest } from "msw";
import { mockPark, mockParksPage } from "./ParksMocks";

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

  rest.get(`${process.env.REACT_APP_API_URL}/parks/list`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockParksPage));
  }),

  rest.delete(`${process.env.REACT_APP_API_URL}/parks/8`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ msg: "Park deleted" }));
  }),

  rest.post(`${process.env.REACT_APP_API_URL}/parks/`, (req, res, ctx) => {
    return res(ctx.status(201), ctx.json(mockPark));
  }),
  rest.get(
    `${process.env.REACT_APP_API_URL}/parks/629f8aec8c2b3037ff6aeb4d`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(mockPark));
    }
  ),
];
