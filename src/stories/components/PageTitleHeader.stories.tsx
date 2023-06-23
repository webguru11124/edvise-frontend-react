import { Meta, StoryFn } from '@storybook/react';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import {
  PageTitleHeader,
  PageTitleHeaderProps
} from '../../components/PageTitleHeader';
import { Button } from '../../components/Button';
import UserIcon from '../assets/user-icon.svg';

const meta: Meta = {
  title: 'Atoms/PageTitleHeader',
  component: PageTitleHeader
};

export default meta;

const Template: StoryFn<PageTitleHeaderProps> = (args) => (
  <PageTitleHeader {...args} />
);

export const Default = Template.bind({});

Default.args = {
  title: 'Team Mangement',
  description: 'Manage your team members and thier account permission here.',
  button: (
    <Button
      text='Add members'
      color='secondary'
      icon={<AddRoundedIcon />}
      iconPosition='start'
    />
  ),
  icon: UserIcon
};
