import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { Account } from "../../types/userInterfaces";

const initialState: Account = {
  name: "",
  username: "",
  email: "",
  city: "",
  favParks: [],
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    loadAccount: (currentState: Account, action: PayloadAction<Account>) =>
      action.payload,

    addFavourite: (currentState: Account, action: PayloadAction<string>) => ({
      ...currentState,
      favParks: [...currentState.favParks, action.payload],
    }),

    deleteFavourite: (
      currentState: Account,
      action: PayloadAction<string>
    ) => ({
      ...currentState,
      favParks: [...currentState.favParks].filter(
        (id) => action.payload !== id
      ),
    }),
    logoutAccount: () => initialState,
  },
});

export const {
  loadAccount: loadAccountActionCreator,
  addFavourite: addFavouriteActionCreator,
  deleteFavourite: deleteFavouriteActionCreator,
  logoutAccount: logoutAccountActionCreator,
} = accountSlice.actions;

export const accountSelector = (state: RootState) => state.account;

export default accountSlice.reducer;
