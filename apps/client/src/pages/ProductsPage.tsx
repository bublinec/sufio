import { Button, PageLayout } from '@sufio/ui';
import { ProductsSection } from '../components/ProductsSection/ProductsSection';

export interface ProductsPageProps {}

export const ProductsPage = (props: ProductsPageProps) => {
  return (
    <PageLayout>
      <ProductsSection />
      <div>
        <Button>Checkout</Button>
      </div>
    </PageLayout>
  );
};
