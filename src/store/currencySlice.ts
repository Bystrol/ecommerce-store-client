import { createSlice } from "@reduxjs/toolkit"

type initialStateData = {
  currency: string
}

const initialState: initialStateData = {
  currency: "USD",
}

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setCurrency(state, action) {
      state.currency = action.payload
    },
  },
})

export default currencySlice
export const currencyActions = currencySlice.actions
