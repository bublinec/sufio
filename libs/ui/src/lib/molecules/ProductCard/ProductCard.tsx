import { Button } from '../../atoms';
import { Image } from '../../models/image';
import { Size } from '../../models/size';

export interface ProductCardProps {
  name: string;
  price: number;
  priceUnit: string;
  buttonLabel: string;
  image?: Image;
  size: Size;
  onClick?: () => void;
}

export const ProductCard = (props: ProductCardProps) => {
  const { name, price, priceUnit, image, size, buttonLabel, onClick } = props;

  return (
    <article className={`flex flex-col gap-2`}>
      <div className="w-full aspect-video object-cover rounded-md bg-dark-gray overflow-hidden shadow-lg">
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
      <div className="flex flex-col justify-between gap-0.5">
        <h2 className="text-xl font-medium">{name}</h2>
        <div className="flex justify-between items-center">
          <p className="text-sm">
            {price} {priceUnit}
          </p>
          <Button onClick={onClick}>{buttonLabel}</Button>
        </div>
      </div>
    </article>
  );
};
