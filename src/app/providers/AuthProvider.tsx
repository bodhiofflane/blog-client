/* import {useEffect, ReactNode} from 'react';
import {useAppDispatch, useAppSelector} from '../../shared/hooks/appHooks';
import { refreshAuthThunk } from '../../entities/auth/model/authThunk';

type AuthProviderProps = {
  children: ReactNode;
};

const AuthProvider = ({children}: AuthProviderProps) => {
  const isUserAuth = useAppSelector((state) => state.auth.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isUserAuth) {
      dispatch(refreshAuthThunk());
    }
  }, [dispatch, isUserAuth]);

  return <>{children}</>;
};

export default AuthProvider;
 */