import { createSlice } from "@reduxjs/toolkit"
import { CategoryItem } from "../types/product"

type initialStateData = {
  items: CategoryItem[]
}

const initialState: initialStateData = {
  items: [],
}

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    fetchData(state, action) {
      state.items = action.payload
    },
    clearArray(state) {
      state.items = []
    },
  },
})

export default categorySlice
export const categoryActions = categorySlice.actions
