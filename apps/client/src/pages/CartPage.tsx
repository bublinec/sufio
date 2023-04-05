import { PageLayout } from '@sufio/ui';
import { CartNavigationSection } from '../components/CartNavigationSection/CartNavigationSection';
import { CartTableSection } from '../components/CartTableSection/CartTableSection';

export interface CartPageProps {}

export const CartPage = (props: CartPageProps) => {
  return (
    <PageLayout>
      <CartTableSection />
      <CartNavigationSection />
    </PageLayout>
  );
};
