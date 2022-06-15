import { setupServer } from "msw/node";
import { usersHandlers } from "./handlers";

export const server = setupServer(...usersHandlers);

beforeAll(() => {
  server.listen();
});
afterAll(() => {
  server.close();
});

export default server;
