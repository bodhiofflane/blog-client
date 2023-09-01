import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from 'react-toastify';

type RequireAuthProps = {
  isUserAuth: boolean;
  children: ReactNode;
};

const RequireAuth = ({isUserAuth, children }: RequireAuthProps) => {
  const location = useLocation();

  console.log(location)

  if (!isUserAuth) {
    toast.info('Только для авторизованных пользователей');
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }
  return <>{children}</>;
};

export default RequireAuth;
