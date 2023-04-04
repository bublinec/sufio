import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
  id: number;
  name: string;
  price: number;
}

export interface CartState {
  items: CartItem[];
  total: number;
}

const initialState: CartState = {
  items: [],
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      state.items.push(action.payload);
      state.total += action.payload.price;
    },
    removeItem: (state, action: PayloadAction<number>) => {
      const itemToRemove = state.items.find((item) => item.id === action.payload);
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.total -= itemToRemove?.price || 0;
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice
