import { configureStore } from "@reduxjs/toolkit";
import parkReducer from "../features/parksSlice/parkSlice";
import uiReducer from "../features/uiSlice/uiSlice";
import authReducer from "../features/authSlice/authSlice";

const store = configureStore({
  reducer: { auth: authReducer, ui: uiReducer, parks: parkReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
