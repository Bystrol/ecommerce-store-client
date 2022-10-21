import { createSlice } from "@reduxjs/toolkit";

const currencySlice = createSlice({
  name: "currency",
  initialState: {
    currency: "USD",
  },
  reducers: {
    setCurrency(state, action) {
      state.currency = action.payload;
    },
  },
});

export default currencySlice;
export const currencyActions = currencySlice.actions;
