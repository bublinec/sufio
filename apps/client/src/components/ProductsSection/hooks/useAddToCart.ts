import { useCallback } from 'react';
import { Product } from '@sufio/models';
import { useDispatch } from 'react-redux';
import { addItem } from '../../../lib/redux-store/slices/cartSlice';

export const useAddToCart = () => {
  const dispatch = useDispatch();

  const addToCart = useCallback((product: Product) => {
    dispatch(addItem({
      product: product,
      quantity: 1
    }));
  }, [dispatch]);

  return addToCart;
};
