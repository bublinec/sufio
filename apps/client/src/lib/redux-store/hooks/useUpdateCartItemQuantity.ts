import { CartItem, Product } from "@sufio/models";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { updateItemQuantity } from "../slices/cartSlice";

// This hook is used to update the quantity of an item in the cart.
export const useUpdateCartItemQuantity = () => {
  const dispatch = useDispatch();

  return useCallback((cartItem: CartItem) => {
    dispatch(updateItemQuantity(cartItem));
  }, [dispatch]);

}