import parkReducer, { loadParksActionCreator } from "./parkSlice";

describe("Given a parkSlice with an loadParkActionCreator", () => {
  describe("When we call the api", () => {
    test("Then it should return the list with all items", () => {
      const expectReturn = {
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
      };
      const initialState = {
        page: 0,
        pageSize: 10,
        next: undefined,
        previous: undefined,
        total: 0,
        results: [],
      };

      const action = loadParksActionCreator(expectReturn);
      const newState = parkReducer(initialState, action);

      expect(newState).toEqual(expectReturn);
    });
  });
});
