import {
  withRequiredAuthInfo,
  WithLoggedInAuthInfoProps
} from '@propelauth/react';
import Layout from 'Components/layouts';
import { LayoutTemplate } from 'Components/layouts/types';

export type LandingPageProps = WithLoggedInAuthInfoProps;

const LandingPage: React.FC<LandingPageProps> = () => {
  return (
    <Layout template={LayoutTemplate.DEFAULT}>
      <div>This is the landing page</div>
    </Layout>
  );
};

export default withRequiredAuthInfo(LandingPage);
