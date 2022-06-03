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
        total: 1,
        results: [
          {
            id: "1",
            name: "Parque Bonito",
            description: "Un parque grande con muchas plantas",
            photos: ["photo.png"],
            location: {
              type: "Point",
              coordinates: [46574, 5478],
            },
            details: ["agua", "fuentes"],
            owner: "",
          },
        ],
      })
    );
  }),
];
