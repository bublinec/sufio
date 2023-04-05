import { CartItem } from '@sufio/models';
import { TableProps } from '@sufio/ui';

export const getOrderTable = (items: CartItem[]): TableProps => {
  const data = items.map((item) => {
    const { product, quantity } = item;

    return {
      id: product.id,
      Quantity: `${quantity}x`,
      Product: product.name,
    };
  });

  const columns = [{ key: 'Quantity' }, { key: 'Product' }];

  return { columns, data };
};
