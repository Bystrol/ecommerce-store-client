import { createSlice } from "@reduxjs/toolkit"
import { CartItem } from "../types/product"

type InitialStateData = {
  items: CartItem[]
  amount: number
  total: number
}

const initialState: InitialStateData = {
  items: [],
  amount: 0,
  total: 0,
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const existingItem = state.items.find(
        (item) =>
          item.id === action.payload.id &&
          item.size === action.payload.size &&
          item.color === action.payload.color
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
        (item) =>
          item.id === action.payload.id &&
          item.size === action.payload.size &&
          item.color === action.payload.color
      )

      if (existingItem) {
        if (existingItem.amount <= 1) {
          const newArray = state.items.filter(
            (item) =>
              item.id !== action.payload.id ||
              item.size !== action.payload.size ||
              item.color !== action.payload.color
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
        (item) =>
          item.id === action.payload.id &&
          item.size === action.payload.existingSize &&
          item.color === action.payload.color
      )

      const cloneItem = state.items.find(
        (item) =>
          item.id === action.payload.id &&
          item.size === action.payload.newSize &&
          item.color === action.payload.color
      )

      if (action.payload.existingSize !== action.payload.newSize) {
        if (cloneItem) {
          cloneItem.amount++
          const newArray = state.items.filter(
            (item) =>
              item.id !== action.payload.id ||
              item.size !== action.payload.existingSize ||
              item.color !== action.payload.color
          )
          state.items = newArray
        } else if (existingItem) {
          existingItem.size = action.payload.newSize
        }
      }
    },
    changeColor(state, action) {
      const existingItem = state.items.find(
        (item) =>
          item.id === action.payload.id &&
          item.size === action.payload.size &&
          item.color === action.payload.existingColor
      )

      const cloneItem = state.items.find(
        (item) =>
          item.id === action.payload.id &&
          item.size === action.payload.size &&
          item.color === action.payload.newColor
      )

      if (action.payload.existingColor !== action.payload.newColor) {
        if (cloneItem) {
          cloneItem.amount++
          const newArray = state.items.filter(
            (item) =>
              item.id !== action.payload.id ||
              item.size !== action.payload.size ||
              item.color !== action.payload.existingColor
          )
          state.items = newArray
        } else if (existingItem) {
          existingItem.color = action.payload.newColor
        }
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
  },
})

export default cartSlice
export const cartActions = cartSlice.actions
