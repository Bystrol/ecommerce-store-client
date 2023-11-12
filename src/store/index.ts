import { configureStore } from "@reduxjs/toolkit"
import categorySlice from "./categorySlice"
import detailSlice from "./detailSlice"
import currencySlice from "./currencySlice"
import cartSlice from "./cartSlice"

export const store = configureStore({
  reducer: {
    category: categorySlice.reducer,
    detail: detailSlice.reducer,
    currency: currencySlice.reducer,
    cart: cartSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
