import { useCallback } from 'react';
import { Product } from '@sufio/models';
import { useDispatch } from 'react-redux';
import { addItem } from '../slices/cartSlice';

// This hook is used to add an item to the cart.
export const useAddToCart = () => {
  const dispatch = useDispatch();

  const addToCart = useCallback((product: Product, quantity = 1) => {
    dispatch(addItem({
      product: product,
      quantity: quantity
    }));
  }, [dispatch]);

  return addToCart;
};
