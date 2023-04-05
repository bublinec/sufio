import { PageLayout } from '@sufio/ui';
import { ProductsActionsSection } from '../components/ProductsActionsSection/ProductsActionsSection';
import { ProductsSection } from '../components/ProductsSection/ProductsSection';

export interface ProductsPageProps {}

export const ProductsPage = (props: ProductsPageProps) => {
  return (
    <PageLayout>
      <ProductsSection />
      <ProductsActionsSection />
    </PageLayout>
  );
};
