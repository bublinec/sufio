import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Section } from './Section';

const Story: ComponentMeta<typeof Section> = {
  component: Section,
};
export default Story;

const Template: ComponentStory<typeof Section> = (args) => (
  <Section {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  header: {
    title: 'Section title',
  },
  children: (
    <div className="bg-light-gray h-screen w-full flex items-center justify-center">
      Section content
    </div>
  ),
};
