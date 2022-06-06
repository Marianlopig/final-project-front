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

  rest.get(`${process.env.REACT_APP_API_URL}/parks/list`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        page: 0,
        pageSize: 10,
        next: undefined,
        previous: undefined,
        total: 0,
        results: [
          {
            id: "2",
            name: "parque bonito",
            description: "un parque muy bonito",
            photos: ["photo1.png, photo2.png"],
            location: {
              type: "Point",
              coordinates: [4567, 5764],
            },
            details: ["aga", "bar"],
            owner: "1",
          },
        ],
      })
    );
  }),

  rest.delete(`${process.env.REACT_APP_API_URL}/parks/8`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ msg: "Park deleted" }));
  }),
];
