import { FaArrowLeft } from '@react-icons/all-files/fa/FaArrowLeft';
import { Button, Section } from '@sufio/ui';
import { Link, useNavigate } from 'react-router-dom';

export interface CartNavigationSectionProps {
}

export const CartNavigationSection = (props: CartNavigationSectionProps) => {

  const navigate = useNavigate();

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
        <Button size="lg">Place order</Button>
      </div>
    </Section>
  );
};
