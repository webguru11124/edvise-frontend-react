import { withRouter } from 'storybook-addon-react-router-v6';
import { Meta, StoryFn } from '@storybook/react';
import SignUpPage from '../../../pages/register';

const meta: Meta = {
  title: 'MVP/SignUp',
  component: SignUpPage,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/'
    }
  }
};

export default meta;

const Template: StoryFn = (args) => <SignUpPage {...args} />;

export const Default = Template.bind({});
Default.args = {};
