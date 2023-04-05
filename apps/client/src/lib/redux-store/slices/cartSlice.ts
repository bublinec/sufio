import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Cart, CartItem } from '@sufio/models';

const initialState: Cart = {
  items: [],
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find((item) => item.product.id === action.payload.product.id);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
      state.total += action.payload.product.unit_price_incl_vat * action.payload.quantity;
    },
    updateItemQuantity: (state, action: PayloadAction<CartItem>) => {
      const itemToUpdate = state.items.find((item) => item.product.id === action.payload.product.id);
      if (itemToUpdate) {
        state.total -= itemToUpdate.product.unit_price_incl_vat * itemToUpdate.quantity;
        itemToUpdate.quantity = action.payload.quantity;
        state.total += itemToUpdate.product.unit_price_incl_vat * itemToUpdate.quantity;
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      const itemToRemove = state.items.find((item) => item.product.id === action.payload);
      if (itemToRemove) {
        state.total -= itemToRemove.product.unit_price_incl_vat * itemToRemove.quantity;
        if (itemToRemove.quantity > 1) {
          itemToRemove.quantity -= 1;
        } else {
          state.items = state.items.filter((item) => item.product.id !== action.payload);
        }
      }
    },
  },
});

export const { addItem, removeItem, updateItemQuantity } = cartSlice.actions;

export default cartSlice;
