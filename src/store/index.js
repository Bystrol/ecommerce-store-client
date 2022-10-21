import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./categorySlice";
import detailSlice from "./detailSlice";
import currencySlice from "./currencySlice";

const store = configureStore({
  reducer: {
    category: categorySlice.reducer,
    detail: detailSlice.reducer,
    currency: currencySlice.reducer,
  },
});

export default store;
