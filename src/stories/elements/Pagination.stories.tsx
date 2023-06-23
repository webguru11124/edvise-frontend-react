import { Meta, StoryFn } from '@storybook/react';
import Pagination, { PaginationProps } from '../../elements/Pagination';

const meta: Meta = {
  title: 'Elements/Pagination',
  component: Pagination
};

export default meta;

const Template: StoryFn<PaginationProps> = (args) => <Pagination {...args} />;

export const Default = Template.bind({});

Default.args = {
  totalPages: 20,
  current: { first: 6, offset: 0 }
};
