import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    items: [],
  },
  reducers: {
    fetchData(state, action) {
      state.items = action.payload;
    },
    clearArray(state) {
      state.items = [];
    },
  },
});

export default categorySlice;
export const categoryActions = categorySlice.actions;
