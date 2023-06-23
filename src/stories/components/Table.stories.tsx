import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Table, { TableProps } from '../../components/Table';

import { CircleProgress } from '../../components/CircleProgress';

const meta: Meta = {
  title: 'Atoms/Table',
  component: Table
};

export default meta;

const Template: StoryFn<TableProps> = (args) => (
  <div className='w-full p-4'>
    <Table {...args} />
  </div>
);

export const Default = Template.bind({});

// Random data
const datas = [];
for (let i = 0; i < 90; ++i) {
  datas.push({
    age: Math.ceil(Math.random() * 20) + 20,
    teacher: `Maria ${i}`,
    status: Math.ceil(Math.random() * 100)
  });
}

Default.args = {
  columns: [
    {
      id: 'age',
      name: 'Age'
    },
    {
      id: 'teacher',
      name: 'Teacher'
    },
    {
      id: 'status',
      name: 'Status',
      render: ({ status }) => {
        return <CircleProgress percentage={status} />;
      }
    }
  ],
  data: datas,
  pagination: {
    pageSize: 5
  }
};
