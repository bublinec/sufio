import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { PageLayout } from './PageLayout';

const Story: ComponentMeta<typeof PageLayout> = {
  component: PageLayout,
};
export default Story;

const Template: ComponentStory<typeof PageLayout> = (args) => (
  <PageLayout {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: [
    <section className="bg-light-gray w-full h-40">Section 1</section>,
    <section className="bg-light-gray w-full h-40">Section 1</section>,
  ],
};
