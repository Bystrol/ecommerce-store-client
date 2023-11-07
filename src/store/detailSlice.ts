import { createSlice } from "@reduxjs/toolkit"
import { DetailItem } from "../types/product"

type InitialStateData = {
  item: DetailItem[]
}

const initialState: InitialStateData = {
  item: [],
}

const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {
    setItem(state, action) {
      state.item = action.payload
    },
    clearArray(state) {
      state.item = []
    },
  },
})

export default detailSlice
export const detailActions = detailSlice.actions
