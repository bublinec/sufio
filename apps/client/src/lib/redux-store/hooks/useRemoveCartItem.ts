import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { removeItem } from "../slices/cartSlice";

// This hook is used to remove an item from the cart.
export const useRemoveCartItem = () => {
  const dispatch = useDispatch();

  return useCallback((productId: number) => {
    dispatch(removeItem(productId));
  }, [dispatch]);

}