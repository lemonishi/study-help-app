import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../actions/taskSlice";
import authSlice from "../actions/authSlice";

export const store = configureStore({
  reducer: {
    task: taskReducer,
    auth: authSlice,
  },
});
