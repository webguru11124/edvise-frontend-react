import { FC } from 'react';
import { Modal } from 'Components/Modal';

import { TInviteItem } from './InviteItem';
import UploadLessons, { R5 } from './UploadLessons';

export enum UploadStatus {
  NORMAL = 0,
  UPLOADING = 1,
  UPLOADED = 2
}

export interface UploadLessonsModalProps {
  status: UploadStatus.NORMAL | UploadStatus.UPLOADED | UploadStatus.UPLOADING;
  uploadPercent: R5;
  invites: Array<TInviteItem>;
  isOpen: boolean;
  toggleModal: () => void;
}

const UploadLessonsModal: FC<UploadLessonsModalProps> = ({
  status,
  uploadPercent,
  isOpen,
  toggleModal
}) => {
  return (
    <Modal isOpen={isOpen} onClose={toggleModal}>
      <UploadLessons
        uploadPercent={uploadPercent}
        status={status}
        toggleModal={toggleModal}
        showRubric={false}
        showFeedback={false}
      />
    </Modal>
  );
};

export default UploadLessonsModal;
