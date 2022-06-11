import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { IParkState } from "../../types/parkInterfaces";

const initialState: IParkState = {
  page: 0,
  pageSize: 10,
  total: 0,
  filters: {},
  results: [],
};

const parkSlice = createSlice({
  name: "parks",
  initialState,
  reducers: {
    loadParks: (
      currentState: IParkState,
      action: PayloadAction<IParkState>
    ) => ({ ...currentState, ...action.payload }),
    filterOwner: (currentState: IParkState, action: PayloadAction<string>) => {
      const newState = { ...currentState };

      if (action.payload) {
        newState.filters.owner = action.payload;
      } else {
        delete newState.filters.city;
      }

      return newState;
    },
    filterCity: (currentState: IParkState, action: PayloadAction<string>) => {
      const newState = { ...currentState };

      if (action.payload) {
        newState.filters.city = action.payload;
      } else {
        delete newState.filters.city;
      }

      return newState;
    },
    filterFav: (
      currentState: IParkState,
      action: PayloadAction<string | undefined>
    ) => {
      const newState = { ...currentState };

      if (action.payload) {
        newState.filters.ids = action.payload;
      } else {
        delete newState.filters.city;
      }

      return newState;
    },
  },
});

export const { loadParks: loadParksActionCreator } = parkSlice.actions;

export const parksListSelector = (state: RootState) => state.parks.results;

export default parkSlice.reducer;
