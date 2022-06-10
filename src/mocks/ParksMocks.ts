import { IPark, IParkState, ParkDetail } from "../redux/types/parkInterfaces";

export const mockPark: IPark = {
  id: "629f8aec8c2b3037ff6aeb4d",
  name: "parque bonito",
  description: "un parque muy bonito",
  photos: ["photo1.png, photo2.png"],
  photosBackup: ["photo1back.png, photo2back.png"],
  location: {
    type: "Point",
    coordinates: [4567, 5764],
  },
  details: [
    ParkDetail.swing,
    ParkDetail.water,
    ParkDetail.shadow,
    ParkDetail.fence,
    ParkDetail.bar,
    ParkDetail.swimmingPool,
    ParkDetail.bench,
    ParkDetail.picnic,
    ParkDetail.pingPong,
    ParkDetail.basket,
    ParkDetail.bike,
  ],
  owner: "629f8a589af86f2543cafa50",
  address: {
    city: "Barcelona",
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
