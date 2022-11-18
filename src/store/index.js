import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./categorySlice";
import detailSlice from "./detailSlice";
import currencySlice from "./currencySlice";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    category: categorySlice.reducer,
    detail: detailSlice.reducer,
    currency: currencySlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
