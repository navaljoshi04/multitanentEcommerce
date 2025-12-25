import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  isVerified: false,
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginsuccess: (state, action) => {
      state.isAuthenticated = true;
      (state.isVerified = true),
        (state.user = action.payload.user),
        (state.token = action.payload.token);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.isVerified = false;
      state.user = null;
      state.token = null;
    },
  },
});

export const {loginsuccess, logout}= authSlice.actions;
export default authSlice.reducer;
