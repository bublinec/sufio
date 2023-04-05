import { useCallback } from 'react';
import { clearCart } from '../slices/cartSlice';
import { useDispatch } from 'react-redux';

// This hook is used to clear cart
export const useClearCart = () => {
  const dispatch = useDispatch();

  return useCallback(() => {
    dispatch(clearCart());
  }, [dispatch]);
};
