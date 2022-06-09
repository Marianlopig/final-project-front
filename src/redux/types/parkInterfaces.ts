export interface IParkState {
  page: number;
  pageSize: number;
  next: string | undefined;
  previous: string | undefined;
  total: number;
  results: IPark[];
}
export interface ILocation {
  type: string;
  coordinates: number[];
}

export interface IParkList {
  results: IPark[];
}

export interface IPark {
  id?: string;
  name: string;
  description: string;
  photos: string[];
  location: ILocation;
  details: string[];
  owner: string;
  address?: IAddress;
}

export interface IAddress {
  city: string;
  address: string;
}

export const ParkDetail = {
  swing: "Swing",
  water: "Water",
  shadow: "Shadow",
  fence: "Fence",
  bar: "Bar",
  swimmingPool: "SwimmingPool",
  bench: "Bench",
  picnic: "Picnic",
  pingPong: "PingPong",
  basket: "Basket",
  bike: "Bike",
};
