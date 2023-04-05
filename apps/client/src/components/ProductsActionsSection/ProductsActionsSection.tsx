import { FaArrowRight } from '@react-icons/all-files/fa/FaArrowRight';
import { Button, Section } from '@sufio/ui';
import { Link } from 'react-router-dom';

export interface ProductsActionsSectionProps {}

export const ProductsActionsSection = (props: ProductsActionsSectionProps) => {
  return (
    <Section>
      <div className="flex justify-end">
        <Link to="/cart">
          <Button size="lg" variant="link" iconRight={<FaArrowRight />}>
            Checkout
          </Button>
        </Link>
      </div>
    </Section>
  );
};