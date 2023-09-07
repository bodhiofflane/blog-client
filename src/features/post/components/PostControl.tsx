import { BsEye } from 'react-icons/bs';

import LikeDislike from './LikeDislike';
import EditPost from './EditPost';

type PostControlProps = {
  views: number;
  postId: string;
  postAuthorId: string;
  authorizedUserId: string;
};

const PostControl = ({ views, postId, postAuthorId, authorizedUserId }: PostControlProps) => {
  return (
    <div className="flex justify-between items-center px-3 pb-3">
      <div className="flex items-baseline gap-3 text-gray-500 text-2xl">

        {/* Conditional render */}
        {postAuthorId === authorizedUserId ? (
          <EditPost postId={postId} />
        ) : (
          <LikeDislike />
        )}

      </div>

      {/* Number of views */}
      <div className="inline-flex items-center gap-1 text-gray-500">
        <BsEye />{views}
      </div>
    </div>
  );
};

export default PostControl;
