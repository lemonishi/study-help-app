import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  status: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, status } = action.payload;
      if (status === 401) {
        state.user = user;
        state.isLoggedIn = true;
      }
    },
    logOut: (state, action) => {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
