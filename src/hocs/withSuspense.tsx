import { Suspense } from 'react';

const withSuspense = (Component: any) => (props: JSX.IntrinsicAttributes) => {
  return (
    <Suspense fallback='Loading...'>
      <Component {...props} />
    </Suspense>
  );
};

export default withSuspense;
