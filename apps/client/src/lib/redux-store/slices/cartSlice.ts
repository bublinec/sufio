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
    // if item already exists, increase quantity, otherwise add new item
    addItem: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find((item) => item.product.id === action.payload.product.id);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
      state.total += action.payload.product.unit_price_incl_vat * action.payload.quantity;
    },
    // update quantity of an item, if there is no item with given id, do nothing
    updateItemQuantity: (state, action: PayloadAction<CartItem>) => {
      const itemToUpdate = state.items.find((item) => item.product.id === action.payload.product.id);
      if (itemToUpdate) {
        state.total -= itemToUpdate.product.unit_price_incl_vat * itemToUpdate.quantity;
        itemToUpdate.quantity = action.payload.quantity;
        state.total += itemToUpdate.product.unit_price_incl_vat * itemToUpdate.quantity;
      }
    },
    // remove item completely, no matter what is the quantity
    removeItem: (state, action: PayloadAction<number>) => {
      const itemToRemove = state.items.find((item) => item.product.id === action.payload);
      if (itemToRemove) {
        state.total -= itemToRemove.product.unit_price_incl_vat * itemToRemove.quantity;
        state.items = state.items.filter((item) => item.product.id !== action.payload);
      }
    },
    // clear cart
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    }
  },
});

export const { addItem, removeItem, updateItemQuantity, clearCart } = cartSlice.actions;

export default cartSlice;
