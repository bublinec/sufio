import { NumberInput } from '@sufio/ui';
import { useCartItem } from '../../lib/redux-store/hooks/useCartItem';
import { useUpdateCartItemQuantity } from '../../lib/redux-store/hooks/useUpdateCartItemQuantity';

export interface ProductQuantityControllerProps {
  productId: number;
}

export const ProductQuantityController = (
  props: ProductQuantityControllerProps
) => {
  const { productId } = props;
  const cartItem = useCartItem(productId);
  const updateCartItemQuantity = useUpdateCartItemQuantity();

  const handleChange = (value: number) => {
    if (!cartItem) return;
    updateCartItemQuantity({ ...cartItem, quantity: value });
  };

  return (
    <div className={`flex gap-1 items-center justify-center`}>
      <NumberInput
        name={`quantity-${productId}`}
        min={0}
        step={1}
        value={cartItem?.quantity ?? 0}
        onChange={handleChange}
      />
    </div>
  );
};
