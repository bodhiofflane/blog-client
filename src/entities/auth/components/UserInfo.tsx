import backupAvatar from '../../../assets/anime-title.jpg';
import { MY_BLOG } from '../../../shared/constants/myBlog';

type UserInfoProps = {
  username: string;
  avatar: string;
};

const UserInfo = ({username, avatar}: UserInfoProps) => {

  const avatarFullURL = MY_BLOG + avatar;

  return (
    <div className="flex items-center space-x-3">
      <>
        <h3 className="hidden md:block">{username}</h3>
        <img
          className="block w-10 h-10 rounded-full object-cover"
          src={avatar ? avatarFullURL : backupAvatar}
          alt={username}
        />
      </>
    </div>
  );
};

export default UserInfo;
