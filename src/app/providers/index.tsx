import ReduxProvider from './ReduxProvider';
import RouterProvider from './RouterProvider';

const Provider = () => {
  return (
    <ReduxProvider>
      <RouterProvider />
    </ReduxProvider>
  );
};

export default Provider;
