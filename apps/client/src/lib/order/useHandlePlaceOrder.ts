import { useCallback } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import { useCart } from "../redux-store/hooks/useCart";
import { useClearCart } from "../redux-store/hooks/useClearCart";

export const useHandlePlaceOrder = () => {
  const navigate = useNavigate();
  const clearCart = useClearCart();
  const cart = useCart();

  const handlePlaceOrder = useCallback(() => {
    const searchParams = createSearchParams({
      items: JSON.stringify(cart.items),
      total: cart.total.toString(),
    }).toString();

    navigate({
      pathname: '/order',
      search: searchParams,
    });
    console.log('Place the order', cart);
    clearCart();
  }, [cart, clearCart, navigate]);

  return handlePlaceOrder;
};