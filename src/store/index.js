import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./categorySlice";
import detailSlice from "./detailSlice";

const store = configureStore({
  reducer: { category: categorySlice.reducer, detail: detailSlice.reducer },
});

export default store;
