import { Meta, StoryFn } from '@storybook/react';
import FocusAreaItem, {
  FocusAreaItemProps
} from '../../../pages/MVP/evaluation/focus-area/focus-area-item';
import { FocusAreaType, Rubric } from '../../../__generated/graphql';

const meta: Meta = {
  title: 'MVP/Evaluaiton/FocusArea',
  component: FocusAreaItem
};

export default meta;

const Template: StoryFn<FocusAreaItemProps> = (args) => (
  <div className='w-full p-5'>
    <FocusAreaItem {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  focusArea: {
    id: 1,
    type: FocusAreaType.Scored,
    title: '1a: Demonstrating Knowledge of Content and Pedagogy',
    focusAreaScore: [],
    focusAreaNote: [],
    moment: [],
    rubric: {} as Rubric,
    rubric_id: 1,
    order: 1,
    description: 'Description'
  },
  onTitleChange: () => {}
};
