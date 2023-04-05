import { Cart } from '@sufio/models';
import { formatPrice } from '@sufio/utils';
import { ProductQuantityController } from '../../ProductQuantityController/ProductQuantityController';
import { RemoveProductController } from '../../RemoveProductController/RemoveProductController';
import { getCartTotals } from './getCartTotals';

export const mapCartToTableData = (cart: Cart) => {
  const data = cart.items.map((item) => {
    const { product, quantity } = item;

    const totalPrice = product.unit_price_incl_vat * quantity;
    const vatFormatted = `${product.vat_category}%`;

    return {
      id: product.id,
      Product: product.name,
      Quantity: (
        <div className={`flex gap-1 items-center justify-center`}>
          <ProductQuantityController productId={product.id} />
          <RemoveProductController productId={product.id} />
        </div>
      ),
      'Unit Price incl. VAT': formatPrice(product.unit_price_incl_vat),
      VAT: vatFormatted,
      Total: formatPrice(totalPrice),
    };
  });

  const totalsData = getCartTotals(cart);

  return [...data, ...totalsData];
};
