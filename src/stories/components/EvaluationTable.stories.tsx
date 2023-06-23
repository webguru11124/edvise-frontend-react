import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import {
  EvaluationTable,
  EvaluationTableProps
} from '../../components/EvaluationTable';

import AvatarImage from '../assets/avatar.png';

const meta: Meta = {
  title: 'Atoms/EvaluationTable',
  component: EvaluationTable
};

export default meta;

const Template: StoryFn<EvaluationTableProps> = (args) => (
  <EvaluationTable {...args} />
);

const tempData = [];
for (let i = 0; i < 75; ++i) {
  tempData.push({
    avatar: AvatarImage,
    name: `Teacher${i}`,
    code: `CODE${i}`
  });
}

export const Default = Template.bind({});
Default.args = {
  pageSize: 10,
  datas: tempData
};
