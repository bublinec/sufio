import { useSelector } from 'react-redux';
import { Cart } from '@sufio/models';
import { RootState } from '../redux-store';

export const useCart = (): Cart => {
  const cart = useSelector<RootState, Cart>((state) => state.cart);
  return cart;
};
