import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Evaluation from 'Pages/MVP/evaluation';

import Loader from 'Components/Loader';
import DashboardLayout from 'Components/layouts/DashboardLayout';
import { appLinks } from 'Utils/constants';
import withSuspense from '../hocs/withSuspense';

const TeamManagementPage = withSuspense(
  lazy(() => import('Pages/team-management'))
);
const SignUpPage = withSuspense(lazy(() => import('Pages/register')));
const LoginPage = withSuspense(lazy(() => import('Pages/login')));
const Settings = withSuspense(lazy(() => import('Pages/MVP/settings')));
const ForgotPasswordPage = withSuspense(
  lazy(() => import('Pages/forgot-password'))
);
const Dashboard = withSuspense(lazy(() => import('Pages/dashboardd')));
const UploadFiles = withSuspense(
  lazy(() => import('Pages/live-meeting/upload-files'))
);
const LiveMeeting = withSuspense(
  lazy(() => import('Pages/live-meeting/live-meeting'))
);
const WrittenMaterial = withSuspense(
  lazy(() => import('Pages/live-meeting/written-material'))
);
const PreRecorded = withSuspense(
  lazy(() => import('Pages/live-meeting/pre-recorded'))
);
const ScheduledMeeting = withSuspense(
  lazy(() => import('Pages/live-meeting/scheduled-meeting'))
);
const TeacherLessons = withSuspense(
  lazy(() => import('Pages/teacher-lessons'))
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    loader: Loader,
    children: [
      {
        path: appLinks.dashboard,
        element: <Dashboard />
      },
      {
        path: appLinks.teamManagement,
        element: <TeamManagementPage />
      },
      {
        path: appLinks.lessons,
        element: <TeacherLessons />
      },
      {
        path: appLinks.profile,
        element: <Settings />
      },
      {
        path: appLinks.lessonUploads,
        element: <UploadFiles />
      },
      {
        path: appLinks.liveLessonUploads,
        element: <LiveMeeting />
      },
      {
        path: appLinks.scheduledLessonUploads,
        element: <ScheduledMeeting />
      },
      {
        path: appLinks.writtenMaterialUploads,
        element: <WrittenMaterial />
      },
      {
        path: appLinks.preRecordedUploads,
        element: <PreRecorded />
      }
    ]
  },
  {
    path: appLinks.login,
    element: <LoginPage />
  },
  {
    path: appLinks.register,
    element: <SignUpPage />
  },
  {
    path: appLinks.forgotPassword,
    element: <ForgotPasswordPage />
  },
  {
    path: appLinks.singleEvaluation,
    element: <Evaluation />
  },
  {
    path: '*',
    element: <div>Page Not Found</div> // TODO create a page not found page
  }
]);
