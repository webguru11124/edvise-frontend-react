import { Meta, StoryFn } from '@storybook/react';
import { createColumnHelper } from '@tanstack/table-core';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BasicTable from '../../components/BasicTable';
import { BasicTableProps } from '../../components/BasicTable/BasicTable.interface';
import { CircleProgress } from '../../components/CircleProgress';
import { Badge } from '../../components/Badge';
import { User } from '../../components/PageHeader/components/User';
import AvatarImage from '../assets/avatar.png';
import { DropdownMenu } from '../../components/DropdownMenu';

export default {
  title: 'Atoms/BasicTable',
  component: BasicTable
} as Meta<typeof BasicTable>;

const Template: StoryFn<BasicTableProps> = (args) => <BasicTable {...args} />;

// Random data
const BasicData = [];
for (let i = 0; i < 20; ++i) {
  BasicData.push({
    age: Math.ceil(Math.random() * 20) + 20,
    teacher: `Maria ${i}`,
    status: Math.ceil(Math.random() * 100)
  });
}

type BasicSampleDataType = {
  age: number;
  teacher: string;
  status: number;
};

const columnHelper = createColumnHelper<BasicSampleDataType>();

const BasicColumns = [
  columnHelper.accessor('age', {
    header: () => 'Age',
    cell: (info) => info.getValue()
  }),
  columnHelper.accessor('teacher', {
    header: () => 'Teacher',
    cell: (info) => info.renderValue()
  }),
  columnHelper.accessor('status', {
    header: 'Status',
    cell: (status) => <CircleProgress percentage={status.getValue()} />
  })
];

export const Default = Template.bind({});
Default.args = {
  data: BasicData,
  columns: BasicColumns
};

export const TeamManagement = Template.bind({});

export type TeamManagementDataType = {
  name: string;
  specialCode: string;
  status: string;
  type: string;
};

const teamMData = [];
for (let i = 1; i < 21; ++i) {
  teamMData.push({
    name: `Maria ${i}`,
    status: i % 5 === 0 ? 'Pending' : 'Approved',
    specialCode: `SK${Math.ceil(Math.random() * 90000) + 10000}`,
    role: i % 5 === 0 ? 'Teacher' : 'Admin'
  });
}

const TeamColumnHelper = createColumnHelper<TeamManagementDataType>();
const TeamMColumns = [
  TeamColumnHelper.accessor('name', {
    header: () => 'Name',
    cell: (info) => (
      <User
        avatar={AvatarImage}
        name={info.getValue()}
        role={info.row.original.specialCode}
      />
    )
  }),
  TeamColumnHelper.accessor('status', {
    header: () => 'Status',
    cell: (info) => (
      <Badge
        text={info.getValue()}
        variant={info.getValue() === 'Pending' ? 'warning' : 'success'}
        withBg
        lightText
      />
    )
  }),
  TeamColumnHelper.accessor('type', {
    header: () => 'Role',
    cell: () => (
      <DropdownMenu
        dropdownText='Admin'
        options={[
          {
            title: 'Teacher',
            action: () => console.log('Nothing')
          }
        ]}
        icon={<ExpandMoreIcon />}
      />
    )
  })
];

TeamManagement.args = {
  data: teamMData,
  columns: TeamMColumns,
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
