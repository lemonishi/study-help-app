import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../actions/taskSlice";

export const store = configureStore({
  reducer: taskReducer,
});
