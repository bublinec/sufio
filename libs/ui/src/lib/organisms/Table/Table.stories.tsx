import { Meta, Story } from '@storybook/react';
import { Table, TableProps } from './Table';

export default {
  title: 'Components/Table',
  component: Table,
} as Meta;

const Template: Story<TableProps> = (args) => <Table {...args} />;

export const BasicTable = Template.bind({});
BasicTable.args = {
  columns: ['Name', 'Age', 'Country'],
  rowKey: 'Name',
  data: [
    {
      Name: 'John',
      Age: 25,
      Country: 'USA',
    },
    {
      Name: 'Jane',
      Age: 32,
      Country: 'Canada',
    },
    {
      Name: 'Peter',
      Age: 42,
      Country: 'UK',
    },
  ],
};

export const LargeTable = Template.bind({});
LargeTable.args = {
  columns: ['Name', 'Email', 'Phone', 'City', 'Country'],
  rowKey: 'Email',
  data: [
    {
      Name: 'John Doe',
      Email: 'johndoe@example.com',
      Phone: '555-555-5555',
      City: 'New York',
      Country: 'USA',
    },
    {
      Name: 'Jane Smith',
      Email: 'janesmith@example.com',
      Phone: '555-555-5555',
      City: 'Toronto',
      Country: 'Canada',
    },
    {
      Name: 'Peter Parker',
      Email: 'peterparker@example.com',
      Phone: '555-555-5555',
      City: 'London',
      Country: 'UK',
    },
    {
      Name: 'Bruce Wayne',
      Email: 'brucewayne@example.com',
      Phone: '555-555-5555',
      City: 'Gotham City',
      Country: 'USA',
    },
    {
      Name: 'Tony Stark',
      Email: 'tonystark@example.com',
      Phone: '555-555-5555',
      City: 'Malibu',
      Country: 'USA',
    },
  ],
};
