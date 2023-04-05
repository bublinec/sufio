import { Cart } from '@sufio/models';
import { formatPrice } from '@sufio/utils';

export const getCartTotals = (cart: Cart) => {
  const totalExclVat = cart.total / 1.2;
  const vat10 = totalExclVat * 0.1;
  const vat20 = totalExclVat * 0.2;
  const total = cart.total;

  const totalsData = [
    {
      id: 'ExclVat',
      Product: '',
      Quantity: '',
      'Unit Price incl. VAT': '',
      VAT: 'Total excl. VAT',
      Total: formatPrice(totalExclVat),
    },
    {
      id: 'Vat10',
      Product: '',
      Quantity: '',
      'Unit Price incl. VAT': '',
      VAT: 'VAT 10%',
      Total: formatPrice(vat10),
    },
    {
      id: 'Vat20',
      Product: '',
      Quantity: '',
      'Unit Price incl. VAT': '',
      VAT: 'VAT 20%',
      Total: formatPrice(vat20),
    },
    {
      id: 'Total',
      Product: '',
      Quantity: '',
      'Unit Price incl. VAT': '',
      VAT: <div className="font-bold">Total</div>,
      Total: <div className="font-bold"> {formatPrice(total)}</div>,
    },
  ];

  return totalsData;
};
