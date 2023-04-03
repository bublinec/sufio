export interface OrderProps {
  className?: string;
}

export const Order = (props: OrderProps) => {
  const { className = '' } = props;
  return (
    <div className={`${className}`}>
      <h1>Order</h1>
    </div>
  );
};
