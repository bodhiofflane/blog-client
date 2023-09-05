import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/appHooks';
import { getPostsThunk } from '../models/postsThunk';
import PostCardFromList from './PostCardFromList';

const PostList = () => {
  const dispath = useAppDispatch();
  const postList = useAppSelector(state => state.posts.posts);

  useEffect(() => {
    dispath(getPostsThunk());
  }, [dispath]);

  return (
    <div>
      {
        postList.map((post) => {
          return (
            <PostCardFromList
              key={post._id}
              post={post}
            />
          );
        })
      }
    </div>
  );
}
 
export default PostList;