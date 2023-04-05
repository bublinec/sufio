import { Cart } from "@sufio/models"
import { formatPrice } from "@sufio/utils";
import { getCartTotals } from "./getCartTotals";


export const mapCartToTableData = (cart: Cart) => {
  const data = cart.items.map((item) => {
    const { product, quantity } = item;

    const totalPrice = product.unit_price_incl_vat * quantity;
    const vatFormatted = `${product.vat_category}%`;

    return {
      id: product.id,
      Product: product.name,
      Quantity: quantity,
      'Unit Price incl. VAT': formatPrice(product.unit_price_incl_vat),
      VAT: vatFormatted,
      Total: formatPrice(totalPrice),
    };
  });

  const totalsData = getCartTotals(cart)

  return [...data, ...totalsData];
}
