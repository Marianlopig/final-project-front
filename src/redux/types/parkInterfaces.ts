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
  id: string;
  name: string;
  description: string;
  photos: string[];
  location: ILocation;
  details: ParkDetail[];
  owner: string;
  address: IAddress;
}

export interface IAddress {
  city: string;
  cp: string;
  address: string;
}

export enum ParkDetail {
  Swing,
  Water,
  Shadow,
  Fence,
  Bar,
  SwimmingPool,
  Bench,
  Picnic,
  PingPong,
  Basket,
  Bike,
}
