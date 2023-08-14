import {ReactNode} from 'react';
import {useAppSelector} from '../hooks/appHooks';
import {Navigate, useLocation} from 'react-router-dom';

type RequireAuthProps = {
  children: ReactNode;
};

const RequireAuth = ({children}: RequireAuthProps) => {
  const auth = useAppSelector((state) => state.auth.auth);
  const location = useLocation();

  if (!auth)
    return (
      <Navigate
        to="/login"
        replace
        state={{from: location}}
      />
    );

  return <>{children}</>;
};

export default RequireAuth;
