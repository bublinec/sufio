import { FaArrowLeft } from '@react-icons/all-files/fa/FaArrowLeft';
import { MdAdd } from '@react-icons/all-files/md/MdAdd';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Solid = Template.bind({});
Solid.args = {
  children: 'Solid Button',
  size: 'lg',
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Outline Button',
  variant: 'outline',
};

export const Link = Template.bind({});
Link.args = {
  children: 'Link Button',
  variant: 'link',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled Button',
  disabled: true,
};

export const Loading = Template.bind({});
Loading.args = {
  children: 'Loading Button',
  isLoading: true,
  loadingText: 'Loading...',
};

export const IconLeft = Template.bind({});
IconLeft.args = {
  children: 'Back',
  variant: 'link',
  iconLeft: <FaArrowLeft />,
};

export const IconRight = Template.bind({});
IconRight.args = {
  children: 'Button with Icon Right',
  iconRight: <MdAdd />,
};
