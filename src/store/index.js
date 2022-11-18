import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./categorySlice";
import detailSlice from "./detailSlice";
import currencySlice from "./currencySlice";
import cartSlice from "./cartSlice";
import navigationSlice from "./navigationSlice";

const store = configureStore({
  reducer: {
    category: categorySlice.reducer,
    detail: detailSlice.reducer,
    currency: currencySlice.reducer,
    cart: cartSlice.reducer,
    navigation: navigationSlice.reducer,
  },
});

export default store;
