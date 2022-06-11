import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { LoginResponse } from "../../types/userInterfaces";

const initialState: LoginResponse = {
  name: "",
  username: "",
  userId: "",
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

export const authSelector = (state: RootState) => state.auth;

export default authSlice.reducer;
