import { Button, Section, Table } from '@sufio/ui';
import { formatPrice } from '@sufio/utils';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useOrder } from '../../lib/order/useOrder';
import { getOrderTable } from './utils/getOrderTable';

export interface OrderSuccesSectionProps {}

export const OrderSuccesSection = (props: OrderSuccesSectionProps) => {
  const { items, total } = useOrder();

  const orderTable = useMemo(() => getOrderTable(items), [items]);

  return (
    <Section header={{ title: 'Thank you for your order', as: 'h1' }}>
      <div className="flex flex-col gap-12 items-center">
        <div className="w-min">
          <Table {...orderTable} hideHeader />
        </div>
        <p className="text-center">
          Please send us the payment of{' '}
          <span className="text-2xl font-bold mx-1">{formatPrice(total)}</span>{' '}
          to our bitcoin address.
        </p>

        <Link to="/products" className="w-full md:w-auto">
          <Button size="lg" className="w-full md:w-auto">
            Continue shopping
          </Button>
        </Link>
      </div>
    </Section>
  );
};
