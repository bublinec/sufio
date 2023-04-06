import { FaArrowRight } from '@react-icons/all-files/fa/FaArrowRight';
import { Button, Section } from '@sufio/ui';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../lib/redux-store/hooks/useCart';

export interface ProductsActionsSectionProps {}

export const ProductsActionsSection = (props: ProductsActionsSectionProps) => {
  const cart = useCart();
  const isEmpty = cart.items.length === 0;
  const navigate = useNavigate();

  return (
    <Section>
      <div className="flex justify-end">
        <Button
          size="lg"
          variant="link"
          iconRight={<FaArrowRight />}
          disabled={isEmpty}
          onClick={() => navigate('/cart')}
        >
          Checkout
        </Button>
      </div>
    </Section>
  );
};
