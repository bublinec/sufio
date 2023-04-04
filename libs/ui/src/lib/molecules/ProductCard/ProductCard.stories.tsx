import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProductCard } from './ProductCard';

const Story: ComponentMeta<typeof ProductCard> = {
  component: ProductCard,
};
export default Story;

const Template: ComponentStory<typeof ProductCard> = (args) => (
  <div className="max-w-sm ">
    <ProductCard {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  name: 'Mercury',
  price: 100,
  priceUnit: 'USD',
  image: {
    url: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBsYW5ldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    alt: 'Mercury',
  },
  buttonLabel: 'Add to cart',
};

export const MissingImage = Template.bind({});
MissingImage.args = {
  name: 'Mercury',
  price: 100,
  priceUnit: 'USD',
  buttonLabel: 'Add to cart',
  size: {
    width: 420,
    height: 260,
  },
};
