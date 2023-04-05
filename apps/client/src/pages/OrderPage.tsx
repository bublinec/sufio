import { PageLayout } from '@sufio/ui';
import { OrderSuccesSection } from '../components/OrderSuccesSection/OrderSuccesSection';

export interface OrderPageProps {}

export const OrderPage = (props: OrderPageProps) => {
  return (
    <PageLayout>
      <OrderSuccesSection />
    </PageLayout>
  );
};
