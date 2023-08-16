import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/appHooks';
import { getPostsThunk } from '../models/postsThunk';
import PostCard from '../../../shared/components/PostCard';

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
            <PostCard
              key={post._id}
              post={post}
            />
          )
        })
      }
    </div>
  );
}
 
export default PostList;