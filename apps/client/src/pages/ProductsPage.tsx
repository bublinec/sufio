import { PageLayout } from '@sufio/ui';
import { ProductsNavigationSection } from '../components/ProductsNavigationSection/ProductsNavigationSection';
import { ProductsSection } from '../components/ProductsSection/ProductsSection';

export interface ProductsPageProps {}

export const ProductsPage = (props: ProductsPageProps) => {
  return (
    <PageLayout>
      <ProductsSection />
      <ProductsNavigationSection />
    </PageLayout>
  );
};
