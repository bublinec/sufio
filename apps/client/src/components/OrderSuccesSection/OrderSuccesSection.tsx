import { Button, Section } from '@sufio/ui';
import { Link } from 'react-router-dom';

export interface OrderSuccesSectionProps {
  className?: string;
}

export const OrderSuccesSection = (props: OrderSuccesSectionProps) => {
  const { className = '' } = props;
  return (
    <Section header={{ title: 'Thank you for your order', as: 'h1' }}>
      {/* <Table /> */}
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam</p>

      <Link to="/">
        <Button>Continue shopping</Button>
      </Link>
    </Section>
  );
};
