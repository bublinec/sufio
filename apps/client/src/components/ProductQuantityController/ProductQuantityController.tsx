import { NumberInput } from '@sufio/ui';
import { useCartItem } from '../../lib/redux-store/hooks/useCartItem';
import { useUpdateItemQuantity } from '../../lib/redux-store/hooks/useUpdateItemQuantity';

export interface ProductQuantityControllerProps {
  productId: number;
}

export const ProductQuantityController = (
  props: ProductQuantityControllerProps
) => {
  const { productId } = props;
  const cartItem = useCartItem(productId);
  const updateItemQuantity = useUpdateItemQuantity();

  const handleChange = (value: number) => {
    if (!cartItem) return;
    updateItemQuantity({ ...cartItem, quantity: value });
  };

  return (
    <div className={``}>
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
