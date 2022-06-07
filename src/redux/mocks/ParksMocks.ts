import { IPark, IParkState, ParkDetail } from "../types/parkInterfaces";

export const mockPark: IPark = {
  id: "629f8aec8c2b3037ff6aeb4d",
  name: "parque bonito",
  description: "un parque muy bonito",
  photos: ["photo1.png, photo2.png"],
  location: {
    type: "Point",
    coordinates: [4567, 5764],
  },
  details: [ParkDetail.Water, ParkDetail.Bar],
  owner: "629f8a589af86f2543cafa50",
  address: {
    city: "Barcelona",
    cp: "08003",
    address: "Passeig de Picasso, 21, 08003 Barcelona",
  },
};

export const mockParksPage: IParkState = {
  page: 0,
  pageSize: 10,
  next: undefined,
  previous: undefined,
  total: 0,
  results: [mockPark],
};
