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
  },
});

export default categorySlice;
export const categoryActions = categorySlice.actions;
