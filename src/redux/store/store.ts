import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "../features/uiSlice/uiSlice";
import authReducer from "../features/authSlice/authSlice";
import accountReducer from "../features/accountSlice/accountSlice";
import parksReducer from "../features/parksSlice/parksSlice";
import parkReducer from "../features/parkSlice/parkSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    ui: uiReducer,
    parks: parksReducer,
    account: accountReducer,
    park: parkReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
