import { createSlice } from "@reduxjs/toolkit";

const navigationSlice = createSlice({
  name: "navigation",
  initialState: {
    isVisible: false,
  },
  reducers: {
    toggleNav(state) {
      state.isVisible = !state.isVisible;
    },
    hideNav(state) {
      state.isVisible = false;
    },
  },
});

export default navigationSlice;
export const navigationActions = navigationSlice.actions;
