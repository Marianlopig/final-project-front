import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { IPark } from "../../types/parkInterfaces";
import { Account } from "../../types/userInterfaces";

const initialState: Account = {
  name: "",
  username: "",
  email: "",
  city: "",
  favParks: [],
  ownParks: [],
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    // loadData:
    addPark: (currentState: Account, action: PayloadAction<IPark>) => ({
      ...currentState,
      ownParks: [...currentState.ownParks, action.payload],
    }),

    deletePark: (currentState: Account, action: PayloadAction<string>) => ({
      ...currentState,
      ownParks: currentState.ownParks.filter(
        (park) => park.id !== action.payload
      ),
    }),
  },
});

export const {
  deletePark: deleteParkActionCreator,
  addPark: addParkActionCreator,
} = accountSlice.actions;

export const accountSelector = (state: RootState) => state.account;

export default accountSlice.reducer;
