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

export interface IPark {
  id: string;
  name: string;
  description: string;
  photos: string[];
  location: ILocation;
  details: string[];
  owner: string;
}
