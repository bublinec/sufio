import { PageLayout } from '@sufio/ui';
import { CartActionsSection } from '../components/CartActionsSection/CartActionsSection';
import { CartTableSection } from '../components/CartTableSection/CartTableSection';

export interface CartPageProps {}

export const CartPage = (props: CartPageProps) => {
  return (
    <PageLayout>
      <CartTableSection />
      <CartActionsSection />
    </PageLayout>
  );
};
