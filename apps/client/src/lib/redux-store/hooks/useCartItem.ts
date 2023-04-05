import { useCart } from './useCart';

export const useCartItem = (productId: number) => {
  const cart = useCart()
  const cartItem = cart.items.find((item) => item.product.id === productId);
  return cartItem;
};
