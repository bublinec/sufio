import { Meta, Story } from '@storybook/react';
import { Table, TableProps } from './Table';

export default {
  component: Table,
} as Meta;

const Template: Story<TableProps> = (args) => <Table {...args} />;

export const LargeTable = Template.bind({});
LargeTable.args = {
  columns: [
    { key: 'Name', align: 'left' },
    { key: 'Email', align: 'left' },
    { key: 'Phone', align: 'center' },
    { key: 'City', align: 'center' },
    { key: 'Country', align: 'center' },
  ],
  data: [
    {
      id: '1',
      Name: 'John Doe',
      Email: 'johndoe@example.com',
      Phone: '555-555-5555',
      City: 'New York',
      Country: 'USA',
    },
    {
      id: '2',
      Name: 'Jane Smith',
      Email: 'janesmith@example.com',
      Phone: '555-555-5555',
      City: 'Toronto',
      Country: 'Canada',
    },
    {
      id: '3',
      Name: 'Peter Parker',
      Email: 'peterparker@example.com',
      Phone: '555-555-5555',
      City: 'London',
      Country: 'UK',
    },
    {
      id: '4',
      Name: 'Bruce Wayne',
      Email: 'brucewayne@example.com',
      Phone: '555-555-5555',
      City: 'Gotham City',
      Country: 'USA',
    },
    {
      id: '5',
      Name: 'Tony Stark',
      Email: 'tonystark@example.com',
      Phone: '555-555-5555',
      City: 'Malibu',
      Country: 'USA',
    },
  ],
};

const SmallTableTemplate: Story<TableProps> = (args) => <Table {...args} />;

export const SmallTable = SmallTableTemplate.bind({});
SmallTable.args = {
  columns: [
    { key: 'Name', align: 'left' },
    { key: 'Email', align: 'center' },
    { key: 'Phone', align: 'center' },
  ],
  data: [
    {
      id: 1,
      Name: 'John Doe',
      Email: 'johndoe@example.com',
      Phone: '555-555-5555',
    },
    {
      id: 2,
      Name: 'Jane Smith',
      Email: 'janesmith@example.com',
      Phone: '555-555-5555',
    },
    {
      id: 3,
      Name: 'Peter Parker',
      Email: 'peterparker@example.com',
      Phone: '555-555-5555',
    },
  ],
};
