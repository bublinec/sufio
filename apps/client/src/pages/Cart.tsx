export interface CartProps {
  className?: string;
}

export const Cart = (props: CartProps) => {
  const { className = '' } = props;
  return (
    <div className={`${className}`}>
      <h1>Cart</h1>
    </div>
  );
};
