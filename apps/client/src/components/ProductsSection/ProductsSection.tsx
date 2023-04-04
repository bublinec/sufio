import { useProductsQuery } from '@sufio/data-access';
import { Product } from '@sufio/models';
import { ProductCard, Section } from '@sufio/ui';
import { mapProductToProductCard } from './utils/mapProductToProductCard';

export interface ProductsSectionProps {}

export const ProductsSection = (props: ProductsSectionProps) => {
  const { data: productsData, isLoading: isLoadingProducts } =
    useProductsQuery();

  return (
    <Section header={{ title: 'Products' }}>
      {isLoadingProducts ? (
        // TODO: SKELLETONS
        <div>Loading...</div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-full">
          {productsData?.map((product: Product) => {
            return <ProductCard {...mapProductToProductCard(product)} />;
          })}
        </div>
      )}
    </Section>
  );
};
