import parkReducer, { loadParksActionCreator } from "./parkSlice";

describe("Given a parkSlice with an loadParkActionCreator", () => {
  describe("When we call the api", () => {
    test("Then it should return the list with all items", () => {
      const expectReturn = {
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
