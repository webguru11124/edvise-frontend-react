import { Meta, StoryFn } from '@storybook/react';
import { createColumnHelper } from '@tanstack/table-core';
import { BasicTableProps } from 'Components/BasicTable/BasicTable.interface';
import { StackedList } from 'Components/StackedList';

const meta: Meta = {
  title: 'Atoms/StackedList',
  component: StackedList
};

export default meta;

const Template: StoryFn<BasicTableProps> = (args) => <StackedList {...args} />;

const BasicData = [];
for (let i = 0; i < 20; ++i) {
  BasicData.push({
    lessonName: 'Lorem Lesson alnfdasdkl asdfknasd a;nfdas adsfnkasdfn',
    teacher: `Maria ${i}`,
    status: Math.ceil(Math.random() * 100),
    date: new Date().getTime()
  });
}

type BasicSampleDataType = {
  lessonName: string;
  teacher: string;
  date: number;
  count: number;
};

const columnHelper = createColumnHelper<BasicSampleDataType>();

const BasicColumns = [
  columnHelper.accessor('lessonName', {
    header: () => 'Lesson Name',
    cell: (info) => info.getValue()
  }),
  columnHelper.accessor('teacher', {
    header: () => 'Teacher',
    cell: (info) => info.renderValue()
  }),
  columnHelper.accessor('date', {
    header: 'Date',
    cell: () => new Date().toLocaleDateString()
  }),
  columnHelper.accessor('count', {
    header: 'Date',
    cell: () => new Date().toLocaleDateString()
  })
];

export const Default = Template.bind({});
Default.args = {
  columns: BasicColumns,
  data: BasicData,
  options: [
    {
      title: 'Edit',
      action: () => {
        /* Change Role */
      }
    },
    {
      title: 'Delete',
      action: () => {
        /* Delete Role */
      }
    }
  ]
};
