import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginResponse } from "../../types/userInterfaces";

const initialState: LoginResponse = {
  name: "",
  username: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (
      currentState: LoginResponse,
      action: PayloadAction<LoginResponse>
    ) => {
      return { ...action.payload };
    },
    logout: () => initialState,
  },
});

export const { login: loginActionCreator, logout: logoutActionCreator } =
  authSlice.actions;

export default authSlice.reducer;
