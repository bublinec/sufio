import { useCallback } from 'react';
import { Product } from '@sufio/models';
import { useDispatch } from 'react-redux';
import { addItem } from '../slices/cartSlice';
import { useToast } from '@sufio/ui';

// This hook is used to add an item to the cart.
export const useAddToCart = () => {
  const dispatch = useDispatch();
  const { showToast } = useToast();

  const addToCart = useCallback((product: Product, quantity = 1) => {
    showToast({
      title: `${product.name} added to cart`,
      status: 'success'
    });

    dispatch(addItem({
      product: product,
      quantity: quantity
    }));

  }, [dispatch, showToast]);

  return addToCart;
};
