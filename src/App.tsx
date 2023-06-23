import { RouterProvider } from 'react-router';
import { AuthProvider } from '@propelauth/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Loader from 'Components/Loader';
import { router } from './routes';
import { queryClient } from './services';

const RenderDevTool = () => {
  if (import.meta.env.DEV) {
    return <ReactQueryDevtools initialIsOpen={false} />;
  }
  return null;
};

const Loading = () => <Loader />;

function App() {
  return (
    <AuthProvider authUrl={import.meta.env.VITE_PROPEL_AUTH_URL}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} fallbackElement={<Loading />} />
        <RenderDevTool />
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;
