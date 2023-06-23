import { Meta, StoryFn } from '@storybook/react';
import { withAuth } from 'Stories/addons';
import { withRouter } from 'storybook-addon-react-router-v6';
import { Header } from '../../components/Header';

const meta: Meta = {
  title: 'Atoms/Header',
  component: Header,
  decorators: [withAuth, withRouter],
  parameters: {
    authRequired: true,
    reactRouter: {
      routePath: '/'
    }
  }
};

export default meta;

const Template: StoryFn = () => <Header />;

export const Default = Template.bind({});
