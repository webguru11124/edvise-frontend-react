import { Meta, StoryFn } from '@storybook/react';
import {
  UploadLessons,
  UploadStatus,
  UploadProps
} from '../../components/UploadLessons';

const meta: Meta = {
  title: 'Atoms/UploadLessons',
  component: UploadLessons
};

export default meta;

const Template: StoryFn<UploadProps> = (args) => <UploadLessons {...args} />;

export const Default = Template.bind({});
Default.args = {
  status: UploadStatus.NORMAL,
  uploadPercent: 53
};
