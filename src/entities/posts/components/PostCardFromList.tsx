import { BsEye } from 'react-icons/bs';
import { LiaUserSolid } from 'react-icons/lia';
import { MY_BLOG } from '../../../shared/constants/myBlog';
import { Link } from 'react-router-dom';

import Htag from '../../../shared/ui/HTag';
import Date from '../../../shared/ui/Date';
import PTag from '../../../shared/ui/PTag';
import CustomLink from '../../../shared/ui/CustomLink';

type PostCardFromListProps = {
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

const PostCardFromList = ({ post }: PostCardFromListProps) => {
  const imgFullURL = MY_BLOG + post.imgURL;
  const formattedAuthorName =
    post.authorName.length > 13
      ? post.authorName.substring(0, 12) + '...'
      : post.authorName;

  return (
    <article className="flex flex-col p-3 w-full bg-bg-light-second dark:bg-bg-dark-second shadow-main dark:shadow-none rounded-md">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-1 cursor-pointer">
          <span className="flex text-gray-500 text-2xl">
            <LiaUserSolid />
          </span>
          <Htag size="h4">{formattedAuthorName}</Htag>
        </div>
        <Date date={post.createdAt} />
      </div>

      <Link className="hover:opacity-90" to={`/post/${post._id}`}>
        <div className="relative rounded-xl overflow-hidden">
          <Htag
            textCenter
            size="h3"
            className="absolute top-0 left-0 py-2 w-full bg-white dark:bg-bg-dark bg-opacity-50 dark:bg-opacity-70"
          >
            {post.title}
          </Htag>

          {post.imgURL ? (
            <img
              className="block w-full aspect-video object-cover object-center"
              src={imgFullURL}
              alt={post.title}
            />
          ) : null}
        </div>
      </Link>

      <div className="my-3 p-2 bg-bg-light dark:bg-bg-dark rounded-md">
        <PTag contrast="mid" className="line-clamp-1">
          {post.postText}
        </PTag>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-baseline gap-3">
          <CustomLink to={`/post/${post._id}`}>К посту</CustomLink>
        </div>

        <div className="inline-flex items-center gap-1 text-gray-500">
          <BsEye />
          {post.views}
        </div>
      </div>
    </article>
  );
};

export default PostCardFromList;
