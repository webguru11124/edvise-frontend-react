import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { SwipePanel } from '../../components/SwipePanel';

const meta: Meta = {
  title: 'Atoms/SwipePanel',
  component: SwipePanel
};

export default meta;

const Template: StoryFn = (args) => (
  <SwipePanel {...args}>
    <div className='min-w-[450px] min-h-[300px] bg-critical mr-2 text-white flex justify-center items-center'>
      1
    </div>
    <div className='min-w-[450px] min-h-[300px] bg-critical mr-2 text-white flex justify-center items-center'>
      2
    </div>
    <div className='min-w-[450px] min-h-[300px] bg-critical mr-2 text-white flex justify-center items-center'>
      3
    </div>
    <div className='min-w-[450px] min-h-[300px] bg-critical mr-2 text-white flex justify-center items-center'>
      4
    </div>
    <div className='min-w-[450px] min-h-[300px] bg-critical mr-2 text-white flex justify-center items-center'>
      5
    </div>
  </SwipePanel>
);

export const Default = Template.bind({});
Default.args = {};
