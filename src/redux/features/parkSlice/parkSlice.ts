import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { IPark } from "../../types/parkInterfaces";

const initialState: IPark = {
  id: "",
  name: "",
  description: "",
  photos: [],
  photosBackup: [],
  location: {
    type: "",
    coordinates: [],
  },
  details: [],
  owner: "",
  address: {
    city: "",
    address: "",
  },
};

const parkSlice = createSlice({
  name: "park",
  initialState,
  reducers: {
    loadParkDetails: (currentState: IPark, action: PayloadAction<IPark>) => ({
      ...action.payload,
    }),
  },
});

export const { loadParkDetails: loadParkDetailsActionCreator } =
  parkSlice.actions;

export const parkSelector = (state: RootState) => state.park;

export default parkSlice.reducer;
