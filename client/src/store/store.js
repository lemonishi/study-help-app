import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../actions/taskSlice";
import authReducer from "../actions/authSlice";
import { apiSlice } from "../actions/apiSlice";
import authSlice from "../actions/authSlice";

export const store = configureStore({
  reducer: {
    task: taskReducer,
    auth: authSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
