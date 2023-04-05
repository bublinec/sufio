import { FaArrowLeft } from '@react-icons/all-files/fa/FaArrowLeft';
import { Button, Section } from '@sufio/ui';
import { Link } from 'react-router-dom';
import { useHandlePlaceOrder } from '../../lib/order/useHandlePlaceOrder';

export interface CartActionsSectionProps {}

export const CartActionsSection = (props: CartActionsSectionProps) => {
  const handlePlaceOrder = useHandlePlaceOrder();

  return (
    <Section>
      <div className="flex justify-between">
        <Link to="back">
          <Button
            variant="link"
            size="lg"
            iconLeft={<FaArrowLeft />}
            onClick={() => window.history.back()}
          >
            Back
          </Button>
        </Link>
        <Button size="lg" onClick={handlePlaceOrder}>
          Place order
        </Button>
      </div>
    </Section>
  );
};
