import { Cart } from "@sufio/models";
import { TableProps } from "@sufio/ui";
import { mapCartToTableData } from "./mapCartToTableData";

export const getCartTable = (cart: Cart): TableProps => {
  const columns: TableProps['columns'] = [
    { key: 'Product', align: 'left' },
    { key: 'Quantity', align: 'center' },
    { key: 'Unit Price incl. VAT', align: 'right' },
    { key: 'VAT', align: 'right' },
    { key: 'Total', align: 'right', width: 'w-40' },
  ];

  const data = mapCartToTableData(cart);

  return { data, columns }
}