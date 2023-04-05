import { FaArrowLeft } from '@react-icons/all-files/fa/FaArrowLeft';
import { Button, Section } from '@sufio/ui';
import { Link, useNavigate } from 'react-router-dom';

export interface CartActionsSectionProps {}

export const CartActionsSection = (props: CartActionsSectionProps) => {
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    navigate('/order');
  };

  return (
    <Section>
      <div className="flex justify-between">
        <Link to="back">
          <Button
            variant="link"
            size="lg"
            iconLeft={<FaArrowLeft />}
            onClick={() => navigate(-1)}
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
