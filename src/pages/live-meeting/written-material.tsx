import { UploadLessons, UploadStatus } from 'Components/UploadLessons';
import DashboardNoSidebar from 'Components/layouts/DashboardNoSidebar';
import { appLinks } from 'Utils/constants';

export default function WrittenMaterial() {
  return (
    <DashboardNoSidebar backLink={appLinks.lessonUploads} backText='Back'>
      <UploadLessons
        status={UploadStatus.NORMAL}
        uploadPercent={2}
        showRubric={false}
        showFeedback={false}
      />
    </DashboardNoSidebar>
  );
}
