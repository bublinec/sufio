import { Product } from "@sufio/models";
import { ProductCardProps } from "@sufio/ui";

export const mapProductToProductCard = (product: Product): ProductCardProps => {
  return {
    name: product.name,
    price: product.unit_price_incl_vat,
    priceUnit: '€',
    buttonLabel: 'Add to cart',
    image: { url: product.image, alt: product.name },
    size: {
      width: 420,
      height: 260,
    },
  }
}