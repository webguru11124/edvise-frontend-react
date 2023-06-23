import { Meta, StoryFn } from '@storybook/react';

import { Modal, ModalProps } from '../../components/Modal';
import AddTeamMembersModal from '../../components/Modal/components/AddTeamMembersModal';
import EditLessonModal from '../../components/Modal/components/EditLessonModal';

const meta: Meta = {
  title: 'Atoms/Modal',
  component: Modal
};

export default meta;

const Template: StoryFn<ModalProps> = (args) => <Modal {...args} />;

export const Default = Template.bind({});

Default.args = {
  isOpen: true,
  onClose: () => {},
  children: <div className='h-96 w-96'>This is a modal</div>
};

export const TeamManagement = Template.bind({});

TeamManagement.args = {
  isOpen: true,
  onClose: () => {},
  children: <AddTeamMembersModal />
};

export const EditLesson = Template.bind({});

EditLesson.args = {
  isOpen: true,
  onClose: () => {},
  children: (
    <EditLessonModal
      onClose={() => {
        console.log('onClose clicked');
      }}
      onApprove={() => {
        console.log('save clicked');
      }}
    />
  )
};
