import { useState } from "react";
import backupAvatar from "../../../assets/anime-title.jpg";
import { MY_BLOG } from "../../../shared/constants/myBlog";
import { BiLogOut } from "react-icons/bi";
import { useAppDispatch } from "../../../shared/hooks/appHooks";
import { logout } from '../model/authSlice';

type UserInfoProps = {
  username: string;
  avatar: string;
};

const UserInfo = ({ username, avatar }: UserInfoProps) => {
  const [isOpenModal, setPropModal] = useState(false);

  const dispatch = useAppDispatch();

  const avatarFullURL = MY_BLOG + avatar;

  return (
    <div className="relative flex items-center space-x-3">
      <h3 className="hidden md:block">{username}</h3>
      <img
        className="block w-10 h-10 rounded-full object-cover"
        src={avatar ? avatarFullURL : backupAvatar}
        alt={username}
        onClick={() => {
          setPropModal((prev) => !prev);
        }}
      />
      {isOpenModal ? (
        <div className="absolute top-[50px] right-5">
          <ul className="bg-teal-100 p-2 rounded-md">
            <li>Сменить тему</li>
            <button onClick={() => dispatch(logout())} className="flex items-center gap-1">
              Выйти
              <BiLogOut />
            </button>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default UserInfo;
