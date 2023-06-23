import { Meta, StoryFn } from '@storybook/react';
import {
  EvaluationTableFilter,
  EvaluationTableFilterProps
} from '../../components/EvaluationTableFilter';

const meta: Meta = {
  title: 'Atoms/EvaluationTableFilter',
  component: EvaluationTableFilter
};

export default meta;

const Template: StoryFn<EvaluationTableFilterProps> = (args) => (
  <div className='bg-neutral-100 p-4 w-full flex align-center justify-center'>
    <div style={{ width: 500 }} className='w-1'>
      <EvaluationTableFilter {...args} />
    </div>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  onClick: () => {
    /*  */
  }
};
