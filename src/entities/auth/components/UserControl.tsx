import {useAppSelector} from '../../../shared/hooks/appHooks';
import CustomLink from '../../../shared/ui/CustomLink';

import UserInfo from './UserInfo';

const UserControl = () => {
  const {username, auth, avatarURL} = useAppSelector((state) => state.auth);

  return (
    <div className="flex items-center space-x-3 order-3">
      {}
      {auth ? (
        <UserInfo
          username={username as string}
          avatar={avatarURL as string}
        />
      ) : (
        <CustomLink to="/login">Войти</CustomLink>
      )}
    </div>
  );
};

export default UserControl;
