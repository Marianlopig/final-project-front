import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
    // loadFavParks:
    // loadOwnParks: (currentState: Account, action: PayloadAction<IPark[]>) => ({
    //   ...currentState,
    //   ownParks: action.payload,
    // }),

    deletePark: (currentState: Account, action: PayloadAction<string>) => ({
      ...currentState,
      ownParks: currentState.ownParks.filter(
        (park) => park.id !== action.payload
      ),
    }),
  },
});

export const { deletePark: deleteParkActionCreator } = accountSlice.actions;

export default accountSlice.reducer;
