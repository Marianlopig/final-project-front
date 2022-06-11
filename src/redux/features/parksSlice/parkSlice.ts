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
    filterOwner: (currentState: IParkState, action: PayloadAction<string>) => ({
      ...currentState,
      filters: { ...currentState.filters, owner: action.payload },
    }),
    filterCity: (currentState: IParkState, action: PayloadAction<string>) => ({
      ...currentState,
      filters: { ...currentState.filters, city: action.payload },
    }),
    filterFav: (
      currentState: IParkState,
      action: PayloadAction<string | undefined>
    ) => ({
      ...currentState,
      filters: { ...currentState.filters, ids: action.payload },
    }),
  },
});

export const {
  loadParks: loadParksActionCreator,
  filterOwner: filterOwnerActionCreator,
  filterCity: filterCityActionCreator,
  filterFav: filterFavActionCreator,
} = parkSlice.actions;

export const parksListSelector = (state: RootState) => state.parks.results;

export default parkSlice.reducer;
