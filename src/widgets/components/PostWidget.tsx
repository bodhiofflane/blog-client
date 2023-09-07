import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useAppDispatch, useAppSelector } from '../../shared/hooks/appHooks';
import { getPostByIdThunk } from '../../entities/post/model/postThunks';
import { clearPostStatusAndMessage } from '../../entities/post/model/postSlice';

import PostCard from '../../entities/post/components/PostCard';
import PostControl from '../../features/post/components/PostControl';

type PostWidgetProps = {
  postId: string;
};

const PostWidget = ({ postId }: PostWidgetProps) => {
  const dispatch = useAppDispatch();
  const authorizedUserId = useAppSelector((state) => state.auth._id);
  const post = useAppSelector((state) => state.post.post);
  const postStatus = useAppSelector((state) => state.post.status);
  const postMessage = useAppSelector((state) => state.post.message);

  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({top: 0, behavior: 'smooth'});
    }, 300); 
    dispatch(getPostByIdThunk(postId));

    return () => {
      dispatch(clearPostStatusAndMessage());
    };
  }, [dispatch, postId]);

  // Наверно редирект оставлю здесь
  useEffect(() => {
    if (postStatus === 'deleted') {
      toast.info(postMessage);
      navigate(-1);
    }
  }, [postStatus, navigate, postMessage]);

  console.log(postStatus, postMessage);

  return (
    <article className="bg-teal-100 rounded-md">
      <PostCard
        post={post}
        postStatus={postStatus}
      />
      <PostControl
        views={post.views}
        postId={post._id}
        postAuthorId={post.authorId}
        authorizedUserId={authorizedUserId}
      />
    </article>
  );
};

export default PostWidget;