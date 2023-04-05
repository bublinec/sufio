import { useCart } from './useCart';

// This hook is used to get a cart item by product id
export const useCartItem = (productId: number) => {
  const cart = useCart()
  const cartItem = cart.items.find((item) => item.product.id === productId);
  return cartItem;
};
