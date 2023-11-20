import { createSlice } from "@reduxjs/toolkit"

type initialStateData = {
  currency: string
  sign: string
}

const initialState: initialStateData = {
  currency: "USD",
  sign: "$",
}

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setCurrency(state, action) {
      state.currency = action.payload

      if (action.payload === "USD") {
        state.sign = "$"
      } else if (action.payload === "EUR") {
        state.sign = "€"
      } else {
        state.sign = "£"
      }
    },
  },
})

export default currencySlice
export const currencyActions = currencySlice.actions
