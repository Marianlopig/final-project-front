import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IParkState } from "../../types/parkInterfaces";

const initialState: IParkState = {
  page: 0,
  pageSize: 10,
  next: undefined,
  previous: undefined,
  total: 0,
  results: [],
};

const parkSlice = createSlice({
  name: "parks",
  initialState,
  reducers: {
    loadParks: (
      currentState: IParkState,
      action: PayloadAction<IParkState>
    ) => ({ ...action.payload }),
  },
});

export const { loadParks: loadParksActionCreator } = parkSlice.actions;

export default parkSlice.reducer;
