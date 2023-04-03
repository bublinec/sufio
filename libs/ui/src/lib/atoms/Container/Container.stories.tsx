import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Container } from './Container';

const Story: ComponentMeta<typeof Container> = {
  component: Container,
};
export default Story;

const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: (
    <div className="bg-background-gray h-screen w-full flex items-center justify-center">
      Main content
    </div>
  ),
};
