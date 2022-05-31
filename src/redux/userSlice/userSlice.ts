import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";

interface User {
  name: string;
  username: string;
}

interface DecodeToken {
  username: string;
  name: string;
}

const initialState: User = {
  name: "",
  username: "",
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    login: (currentState: DecodeToken, action: PayloadAction<DecodeToken>) => {
      return { ...action.payload };
    },
    logout: () => initialState,
  },
});

export const { login: loginActionCreator, logout: logoutActionCreator } =
  userSlice.actions;
export const selectCount = (state: RootState) => state.users;

export default userSlice.reducer;
