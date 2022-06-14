export interface IUser {
  name: string;
  username: string;
  email: string;
  password: string;
  city: string;
}

export interface LoginResponse {
  name: string;
  username: string;
  userId: string;
}

export interface LoginData {
  username: string;
  password: string;
}

export interface IToken {
  token: string;
}

export interface DataAxiosLogin {
  data: IToken;
  status: number;
}

export interface Ierror {
  message: string;
}

export interface Account {
  name: string;
  username: string;
  email: string;
  city: string;
  favParks: string[];
  loggedIn?: boolean;
}
