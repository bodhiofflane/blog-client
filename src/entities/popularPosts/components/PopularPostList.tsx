import {useEffect} from 'react';
import PopularPostCard from './PopularPostCard';
import {useAppDispatch, useAppSelector} from '../../../shared/hooks/appHooks';
import {getPopularPostsThunk} from '../models/getPopularPostThunk';

const PopularPostList = () => {
  const dispathc = useAppDispatch();
  const {popularPosts, status} = useAppSelector(
    (state) => state.popularPosts
  );

  useEffect(() => {
    dispathc(getPopularPostsThunk());
  }, [dispathc]);

  if (status !== 'received') {
    return <p>Что-то пошло не так</p>
  }

  return (
    <div>
      {popularPosts.map((popularPost) => {
        return (
          <PopularPostCard
            key={popularPost._id}
            title={popularPost.title}
            _id={popularPost._id}
            views={popularPost.views}
          />
        );
      })}
    </div>
  );
};

export default PopularPostList;
