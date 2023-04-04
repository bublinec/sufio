import { PageLayout } from '@sufio/ui';
import { ProductsSection } from '../components/ProductsSection/ProductsSection';

export interface ProductsPageProps {}

export const ProductsPage = (props: ProductsPageProps) => {
  return (
    <PageLayout>
      <ProductsSection />
    </PageLayout>
  );
};
