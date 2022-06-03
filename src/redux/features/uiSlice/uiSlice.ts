import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";

export interface IUiSlice {
  showSpinner: boolean;
}

const initialState: IUiSlice = {
  showSpinner: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    loading: (currentState: IUiSlice) => ({
      ...currentState,
      showSpinner: true,
    }),
    notLoading: (currentState: IUiSlice) => ({
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
