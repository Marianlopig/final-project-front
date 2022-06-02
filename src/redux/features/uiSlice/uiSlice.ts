import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";

export interface iUiSlice {
  showSpinner: boolean;
}

const initialState: iUiSlice = {
  showSpinner: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    loading: (currentState: iUiSlice) => ({
      ...currentState,
      showSpinner: true,
    }),
    notLoading: (currentState: iUiSlice) => ({
      ...currentState,
      showSpinner: false,
    }),
  },
});

export const {
  loading: loadingActionCreator,
  notLoading: notLoadingActionCreator,
} = uiSlice.actions;

export const uiShowSpinnerSelector = (state: RootState) => state.ui.showSpinner;

export default uiSlice.reducer;
