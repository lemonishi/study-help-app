import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../actions/taskSlice";
import authReducer from "../actions/authSlice";
import { apiSlice } from "../actions/apiSlice";

export const store = configureStore({
  reducer: {
    task: taskReducer,
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
