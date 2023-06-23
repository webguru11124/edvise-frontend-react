import { Meta, StoryFn } from '@storybook/react';
import AvatarImage from '../assets/avatar.png';
import TopBar, { TopBarProps } from '../../components/TopBar';

const meta: Meta = {
  title: 'Atoms/TopBar',
  component: TopBar
};

export default meta;

const Template: StoryFn<TopBarProps> = (args) => <TopBar {...args} />;

export const Default = Template.bind({});

Default.args = {
  firstName: 'Anabel',
  lastName: 'Rohan',
  avatar: AvatarImage,
  email: 'anabelrohan@gmail.com',
  roleName: 'Super Admin User'
};
