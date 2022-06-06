import { configureStore } from "@reduxjs/toolkit";
import parkReducer from "../features/parksSlice/parkSlice";
import uiReducer from "../features/uiSlice/uiSlice";
import authReducer from "../features/authSlice/authSlice";
import accountReducer from "../features/accountSlice/accountSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    ui: uiReducer,
    parks: parkReducer,
    account: accountReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
