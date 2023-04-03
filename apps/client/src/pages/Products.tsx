export interface ProductsProps {
  className?: string;
}

export const Products = (props: ProductsProps) => {
  const { className = '' } = props;
  return (
    <div className={`${className}`}>
      <h1>Products</h1>
    </div>
  );
};
