import { createSlice } from "@reduxjs/toolkit"
import { CartItem } from "../types/product"

type InitialStateData = {
  items: CartItem[]
  amount: number
  total: number
  isVisible: boolean
}

const initialState: InitialStateData = {
  items: [],
  amount: 0,
  total: 0,
  isVisible: false,
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      )

      if (existingItem) {
        existingItem.amount++
      } else {
        state.items.push(action.payload)
      }

      state.amount++
      state.total = state.total + action.payload.price
    },
    removeItem(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      )

      if (existingItem) {
        if (existingItem.amount <= 1) {
          const newArray = state.items.filter(
            (item) => item.id !== action.payload.id
          )
          state.items = newArray
        } else {
          existingItem.amount--
        }

        state.amount--
        state.total = state.total - existingItem.price
      }
    },
    changeSize(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      )
      if (existingItem) {
        existingItem.size = action.payload.size
      }
    },
    changeColor(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      )
      if (existingItem) {
        existingItem.color = action.payload.color
      }
    },
    setItems(state, action) {
      state.items = action.payload
      state.items.forEach((item) => {
        state.total += item.price * item.amount
        state.amount += item.amount
      })
    },
    clearItems(state) {
      state.items = []
      state.amount = 0
      state.total = 0
    },
    toggleCart(state) {
      state.isVisible = !state.isVisible
    },
    hideCart(state) {
      state.isVisible = false
    },
  },
})

export default cartSlice
export const cartActions = cartSlice.actions
