import { Meta, StoryFn } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import SideBar, { defaultLinks, SidebarProps } from '../../components/SideBarr';

export default {
  title: 'Components/SideBarr',
  component: SideBar,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/'
    }
  }
} as Meta;

const Template: StoryFn<SidebarProps> = (args) => <SideBar {...args} />;

export const Default = Template.bind({});

Default.args = {
  links: defaultLinks
};
