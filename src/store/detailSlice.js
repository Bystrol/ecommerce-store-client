import { createSlice } from "@reduxjs/toolkit";

const detailSlice = createSlice({
  name: "detail",
  initialState: {
    item: [],
  },
  reducers: {
    setItem(state, action) {
      state.item = action.payload;
    },
    clearArray(state) {
      state.item = [];
    },
  },
});

export default detailSlice;
export const detailActions = detailSlice.actions;
