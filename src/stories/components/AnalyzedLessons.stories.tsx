import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import {
  AnalyzedLessons,
  AnalyzedLessonProps
} from '../../components/AnalyzedLessons';

const meta: Meta = {
  title: 'Atoms/AnalyzedLessons',
  component: AnalyzedLessons
};

export default meta;

const Template: StoryFn<AnalyzedLessonProps> = (args) => (
  <AnalyzedLessons {...args} />
);

export const Default = Template.bind({});
Default.args = {
  analyzedLessons: [
    {
      title: 'Title Placeholder Text 1',
      imageUrl:
        'https://randomwordgenerator.com/img/picture-generator/57e6d543485bae14f1dc8460962e33791c3ad6e04e507440762a7cd5914dcd_640.jpg',
      date: '1 Jan, 2023'
    },
    {
      title: 'Title Placeholder Text 2',
      imageUrl:
        'https://randomwordgenerator.com/img/picture-generator/57e3d14b4b5aa514f1dc8460962e33791c3ad6e04e507440702d79d39748cd_640.jpg',
      date: '2 Jan, 2023'
    },
    {
      title: 'Title Placeholder Text 3',
      imageUrl:
        'https://randomwordgenerator.com/img/picture-generator/55e7d24a4255b10ff3d8992cc12c30771037dbf85254784a70287bd29044_640.jpg',
      date: '5 Jan, 2023'
    },
    {
      title: 'Title Placeholder Text 4',
      imageUrl:
        'https://randomwordgenerator.com/img/picture-generator/57e6d543485bae14f1dc8460962e33791c3ad6e04e507440762a7cd5914dcd_640.jpg',
      date: '6 Jan, 2023'
    },
    {
      title: 'Title Placeholder Text 5',
      imageUrl:
        'https://randomwordgenerator.com/img/picture-generator/57e6d543485bae14f1dc8460962e33791c3ad6e04e507440762a7cd5914dcd_640.jpg',
      date: '9 Jan, 2023'
    }
  ]
};
