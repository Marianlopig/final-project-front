import { configureStore } from "@reduxjs/toolkit";
import parkReducer from "../features/parksSlice/parkSlice";
import uiReducer from "../features/uiSlice/uiSlice";
import usersReducer from "../features/userSlice/userSlice";

const store = configureStore({
  reducer: { users: usersReducer, ui: uiReducer, parks: parkReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
