import { Section, Table } from '@sufio/ui';
import { useMemo } from 'react';
import { useCart } from '../../lib/redux-store/hooks/useCart';
import { getCartTable } from './utils/getCartTable';

export interface CartTableSectionProps {}

export const CartTableSection = (props: CartTableSectionProps) => {
  const cart = useCart();
  const cartTable = useMemo(() => getCartTable(cart), [cart]);

  return (
    <Section header={{ title: 'Products', as: 'h1' }}>
      <Table {...cartTable} />
    </Section>
  );
};
