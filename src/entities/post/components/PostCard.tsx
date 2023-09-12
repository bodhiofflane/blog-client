import { LiaUserSolid } from 'react-icons/lia';

import transformDate from '../../../shared/utils/transformData.utils';
import { MY_BLOG } from '../../../shared/constants/myBlog';
import Loading from '../../../shared/ui/Loading';
import Error from '../../../shared/ui/Error';
import Htag from '../../../shared/ui/HTag';

type PostCardProps = {
  post: {
    _id: string;
    title: string;
    postText: string;
    authorId: string;
    authorName: string;
    imgURL: string;
    views: number;
    createdAt: string;
    updatedAt: string;
  },
  postStatus: 'waiting' | 'loading' | 'success' | 'error' | 'created' | 'deleted';
};

const PostCard = ({ post, postStatus }: PostCardProps) => {

  const formattedAuthorName =
    post.authorName?.length > 13
      ? post.authorName.substring(0, 12) + '...'
      : post.authorName;

  // Conditional render
  if (postStatus === 'loading' || postStatus === 'waiting') {
    return <Loading/>
  }
  if (postStatus === 'error') {
    return <Error/>;
  }

  return (
    <div className="flex flex-col p-3 w-full">

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1 cursor-pointer">
          <span className="flex text-gray-500 text-2xl">
            <LiaUserSolid />
          </span>
          <h4 className="text-gray-500 text-xl">{formattedAuthorName}</h4>
        </div>
        <p className="text-gray-500">{transformDate(post.createdAt)}</p>
      </div>

      <Htag size='h2' textCenter className='mb-3'>
        {post.title}
      </Htag>
      <div className="relative rounded-xl overflow-hidden">
        {post.imgURL ? (
          <img
            className="block w-full h-96 md:h-[800px] object-cover object-center"
            src={MY_BLOG + post.imgURL}
            alt={post.title}
          />
        ) : null}
      </div>

      <div className="my-3 p-2 bg-bg-light dark:bg-bg-dark rounded-md">
        <p className="text-gray-500">{post.postText}</p>
      </div>
    </div>
  );
};

export default PostCard;
