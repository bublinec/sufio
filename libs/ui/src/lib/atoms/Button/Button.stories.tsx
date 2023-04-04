import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from './Button';

const Story: ComponentMeta<typeof Button> = {
  component: Button,
};
export default Story;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary Button',
  loadingText: 'Loading...',
  onClick: () => console.log('Primary Button Clicked'),
};

export const Loading = Template.bind({});
Loading.args = {
  children: 'Primary Button',
  isLoading: true,
  loadingText: 'Loading...',
};
