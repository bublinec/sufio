import { Meta, Story } from '@storybook/react';
import { useState } from 'react';
import { NumberInput, NumberInputProps } from './NumberInput';

export default {
  component: NumberInput,
} as Meta;

const Template: Story<NumberInputProps> = (args) => {
  const [value, setValue] = useState(args.value || 0);
  return <NumberInput {...args} value={value} onChange={setValue} />;
};

export const Default = Template.bind({});
Default.args = {
  name: 'quantity',
  min: 0,
  max: 100,
  step: 1,
  label: 'Quantity',
  helpText: 'Enter a quantity between 0 and 100',
};
