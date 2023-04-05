import { useProductsQuery } from '@sufio/data-access';
import { Product } from '@sufio/models';
import { ProductCard, ProductCardSkeleton, Section } from '@sufio/ui';
import { useAddToCart } from './hooks/useAddToCart';
import { mapProductToProductCard } from './utils/mapProductToProductCard';

export interface ProductsSectionProps {}

export const ProductsSection = (props: ProductsSectionProps) => {
  const { data: productsData, isLoading: isLoadingProducts } =
    useProductsQuery();

  const addToCart = useAddToCart();

  return (
    <Section header={{ title: 'Products' }}>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-full">
        {isLoadingProducts
          ? // index as a key is acceptable here, since the skeleton items are not related to any data
            // and are not reordered, removed, or added during the loading process
            [...Array(8)].map((e, i) => <ProductCardSkeleton key={i} />)
          : productsData?.map((product: Product) => {
              return (
                <ProductCard
                  onClick={() => addToCart(product)}
                  key={product.id}
                  {...mapProductToProductCard(product)}
                />
              );
            })}
      </div>
    </Section>
  );
};
