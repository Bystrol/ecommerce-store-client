import { configureStore } from "@reduxjs/toolkit"
import currencySlice from "./currencySlice"
import cartSlice from "./cartSlice"

export const store = configureStore({
  reducer: {
    currency: currencySlice.reducer,
    cart: cartSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
