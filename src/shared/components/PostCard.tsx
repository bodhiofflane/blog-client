import {BsEye} from 'react-icons/bs';
import {LiaUserSolid} from 'react-icons/lia';
import {BiLike, BiDislike} from 'react-icons/bi';
import {MY_BLOG} from '../constants/myBlog';
import transformDate from '../utils/transformData.utils';

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
  };
};

const PostCard = ({post}: PostCardProps) => {
  const imgFullURL = MY_BLOG + post.imgURL;
  const formattedAuthorName =
    post.authorName.length > 13
      ? post.authorName.substring(0, 12) + '...'
      : post.authorName;

  return (
    /* Оберну в линк позже */
    <article className="flex flex-col p-3 mb-2 w-full rounded-md bg-teal-100">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-1 cursor-pointer">
          <span className="flex text-gray-500 text-2xl">
            <LiaUserSolid />
          </span>
          <h3 className="text-gray-500 text-xl">{formattedAuthorName}</h3>
        </div>
        <p className="text-gray-500">{transformDate(post.createdAt)}</p>
      </div>

      <div className="relative rounded-xl overflow-hidden">
        <h3 className="absolute top-0 left-0 w-full py-3 text-center text-lg text-gray-700 font-bold bg-gray-50 bg-opacity-50 break-words">
          {post.title}
        </h3>
        <img
          className="block w-full h-96 md:h-[800px] object-cover object-center"
          src={imgFullURL}
          alt={post.title}
        />
      </div>
      <div className="my-3 p-2 bg-white rounded-md">
        <p className="text-gray-500 line-clamp-3">{post.postText}</p>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-baseline gap-3">
          <span className="text-teal-700 text-2xl">
            <BiLike />
          </span>
          <span className="text-red-400 text-2xl">
            <BiDislike />
          </span>
        </div>

        <div className="inline-flex items-center gap-1 text-gray-500">
          <BsEye />
          {post.views}
        </div>
      </div>
    </article>
  );
};

export default PostCard;
