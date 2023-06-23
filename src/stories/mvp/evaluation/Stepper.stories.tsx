import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Stepper from '../../../pages/MVP/evaluation/script/stepper';
import { StepperProps } from '../../../pages/MVP/evaluation/evaluation.interface';

const meta: Meta = {
  title: 'MVP/Evaluaiton/Stepper',
  component: Stepper
};

export default meta;

const Template: StoryFn<StepperProps> = (args) => (
  <div className='w-[500px] p-5'>
    <Stepper {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  isActive: true,
  isNote: false,
  tab: 'paragraph',
  transcript: {
    start: 1.1591797,
    end: 3.8574219,
    text: "Yeah. We're gonna talk about numbers today.",
    speakers: [1, 0, 0, 0, 0, 0, 0],
    question: false,
    speaker: 'both',
    emotions: {
      results: {
        passion: 0.0589,
        surprise: 0.0501,
        suspense: 0.4842,
        happiness: 0.138,
        neutral: 0.1327,
        sadness: 0.1361
      },
      class: 'suspense'
    },
    blooms: {
      class: 'Remembering',
      results: {
        Analyzing: 0.0002,
        Applying: 0.0003,
        Creating: 0.0003,
        Evaluating: 0.0003,
        None: 0.0,
        Remembering: 0.9987,
        Understanding: 0.0002
      }
    },
    blooms_custom: {
      class: 'None',
      results: {
        Applying: 0,
        Creating: 0,
        Remembering: 0,
        Evaluating: 0,
        Understanding: 0,
        Analyzing: 0,
        None: 0
      }
    },
    blooms_keyword: { matches: [], results: {} },
    notes: 'This is note'
  },
  onSelect: () => {
    /*  */
  }
};
