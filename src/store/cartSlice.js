import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    amount: 0,
    total: 0,
    isVisible: false,
  },
  reducers: {
    addItem(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.amount++;
      } else {
        state.items.push(action.payload);
      }

      state.amount++;
      state.total = state.total + action.payload.price;
    },
    removeItem(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem.amount <= 1) {
        const newArray = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        state.items = newArray;
      } else {
        existingItem.amount--;
      }

      state.amount--;
      state.total = state.total - action.payload.price;
    },
    changeSize(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      existingItem.size = action.payload.size;
    },
    changeColor(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      existingItem.color = action.payload.color;
    },
    fetchItems(state, action) {
      state.items = action.payload;
      state.items.forEach((item) => {
        state.total += item.price * item.amount;
        state.amount += item.amount;
      });
    },
    clearArray(state) {
      state.items = [];
      state.amount = 0;
      state.total = 0;
    },
    toggleCart(state) {
      state.isVisible = !state.isVisible;
    },
    hideCart(state) {
      state.isVisible = false;
    },
  },
});

export default cartSlice;
export const cartActions = cartSlice.actions;
