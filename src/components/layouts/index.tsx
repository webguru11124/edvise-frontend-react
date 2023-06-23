import ErrorBoundary from '../../features/error-boundary';
import DashboardLayout from './DashboardLayout';
import DefaultLayout from './DefaultLayout';
import { LayoutProps, LayoutTemplate } from './types';

const Layout: React.FC<LayoutProps> = ({ template }) => {
  let Component: React.ReactNode;

  switch (template) {
    case LayoutTemplate.DEFAULT:
      Component = <DefaultLayout />;
      break;
    case LayoutTemplate.DASHBOARD:
      Component = <DashboardLayout />;
      break;
    default:
      Component = <DefaultLayout />;
  }

  return (
    <ErrorBoundary>
      <>{Component}</>
    </ErrorBoundary>
  );
};

export * from './types';
export default Layout;
