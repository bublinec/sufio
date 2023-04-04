import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { SectionHeader } from './SectionHeader';

const Story: ComponentMeta<typeof SectionHeader> = {
  component: SectionHeader,
};
export default Story;

const Template: ComponentStory<typeof SectionHeader> = (args) => (
  <SectionHeader {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  title: 'Section Header',
};
