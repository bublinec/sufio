import { Button } from '../../atoms';

export interface ProductCardProps {
  name: string;
  price: number;
  priceUnit: string;
  buttonLabel: string;
  image?: {
    url: string;
    alt: string;
  };
  size: {
    width: number;
    height: number;
  };
}

export const ProductCard = (props: ProductCardProps) => {
  const { name, price, priceUnit, image, size, buttonLabel } = props;

  return (
    <article className={`flex flex-col gap-3`}>
      <div className="w-full h-56 object-cover rounded-md bg-dark-gray overflow-hidden">
        {image ? (
          <img
            src={image?.url}
            className="w-full h-full object-cover"
            alt={image?.alt}
          />
        ) : size ? (
          <div className="w-full h-full flex justify-center items-center text-4xl font-light">{`${size?.width} × ${size?.height}`}</div>
        ) : null}
      </div>
      <div className="flex flex-col justify-between gap-2">
        <h2 className="text-xl font-medium">{name}</h2>
        <div className="flex justify-between items-center">
          <p className="text-sm">
            {price} {priceUnit}
          </p>
          <Button>{buttonLabel}</Button>
        </div>
      </div>
    </article>
  );
};
