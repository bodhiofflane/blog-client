import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/appHooks';
import { getPostsThunk } from '../models/postsThunk';

const PostList = () => {
  const dispath = useAppDispatch();
  const postList = useAppSelector(state => state.posts.posts);
  console.log(postList);

  useEffect(() => {
    dispath(getPostsThunk());
  }, []);
  return (
    <div>
      {
        postList.map((item, index) => {
          return (
            <div key={index}>
              <h2>{item.title}</h2>
            </div>
          )
        })
      }
    </div>
  );
}
 
export default PostList;