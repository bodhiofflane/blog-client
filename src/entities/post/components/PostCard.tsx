import {useEffect} from 'react';

import {BsEye} from 'react-icons/bs';
import {LiaUserSolid} from 'react-icons/lia';
import {BiLike, BiDislike} from 'react-icons/bi';
import {AiOutlineEdit, AiOutlineDelete} from 'react-icons/ai';

import {MY_BLOG} from '../../../shared/constants/myBlog';

import transformDate from '../../../shared/utils/transformData.utils';
import {useAppDispatch, useAppSelector} from '../../../shared/hooks/appHooks';
import {getPostByIdThunk} from '../model/postThunks';
import Button from '../../../shared/ui/Button';
import { deletePostByIdThunk } from '../../../features/post/model/postThunk';
import { useNavigate } from 'react-router-dom';
import { clearPostStatusAndMessage } from '../model/postSlice';
import { toast } from 'react-toastify';
import Loading from '../../../shared/ui/Loading';

type PostCardProps = {
  postId: string;
};

const PostCard = ({postId}: PostCardProps) => {
  const dispath = useAppDispatch();
  const authUserId = useAppSelector((state) => state.auth._id);
  const post = useAppSelector((state) => state.post.post);
  const status = useAppSelector((state) => state.post.status);
  const message = useAppSelector((state) => state.post.message);

  const navigate = useNavigate();

  const imgFullURL = MY_BLOG + post.imgURL;
  const formattedAuthorName =
    post.authorName?.length > 13
      ? post.authorName.substring(0, 12) + '...'
      : post.authorName;

  // Доделать
  useEffect(() => {
    dispath(getPostByIdThunk(postId));
  }, [dispath, postId]);

  useEffect(() => {
    if (status === 'deleted') {
      toast(message);
      navigate(-1);
    }
    return () => {
      dispath(clearPostStatusAndMessage());
    }
  }, [status, navigate, message, dispath]);

  // Handlers
  const deleteThisPost = (id: string) => {
    dispath(deletePostByIdThunk(id));
  };

  if (status === 'loading') {
    return <Loading/>;
  }

  return (
    <article className="flex flex-col p-3 w-full rounded-md bg-teal-100">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-1 cursor-pointer">
          <span className="flex text-gray-500 text-2xl">
            <LiaUserSolid />
          </span>
          <h3 className="text-gray-500 text-xl">{formattedAuthorName}</h3>
        </div>
        <p className="text-gray-500">{transformDate(post.createdAt)}</p>
      </div>

      <h3 className="py-3 text-lg text-gray-700 font-bold break-words">
        {post.title}
      </h3>
      <div className="relative rounded-xl overflow-hidden">
        {post.imgURL ? (
          <img
            className="block w-full h-96 md:h-[800px] object-cover object-center"
            src={imgFullURL}
            alt={post.title}
          />
        ) : null}
      </div>

      <div className="my-3 p-2 bg-white rounded-md">
        <p className="text-gray-500">{post.postText}</p>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-baseline gap-3 text-gray-500 text-2xl">
          {post.authorId === authUserId ? (
            <>
              <span>
                <AiOutlineEdit />
              </span>
              <Button
                style="red"
                onClick={() => deleteThisPost(postId)}
              >
                <AiOutlineDelete />
              </Button>
            </>
          ) : (
            <>
              <span className="text-teal-700 text-2xl">
                <BiLike />
              </span>
              <span className="text-red-400 text-2xl">
                <BiDislike />
              </span>
            </>
          )}
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
