import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProductCardSkeleton } from './ProductCardSkeleton';

const Story: ComponentMeta<typeof ProductCardSkeleton> = {
  component: ProductCardSkeleton,
};
export default Story;

const Template: ComponentStory<typeof ProductCardSkeleton> = (args) => (
  <div className="max-w-sm ">
    <ProductCardSkeleton {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {};
