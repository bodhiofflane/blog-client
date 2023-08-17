import {useEffect} from 'react';
import PopularPostCard from '../../../shared/components/PopularPostCard';
import {useAppDispatch, useAppSelector} from '../../../shared/hooks/appHooks';
import {getPopularPostsThunk} from '../../popularPosts/models/getPopularPostThunk';

const PopularPostList = () => {
  const dispathc = useAppDispatch();
  const {popularPosts, status} = useAppSelector(
    (state) => state.popularPosts
  );

  console.log(popularPosts);

  useEffect(() => {
    dispathc(getPopularPostsThunk());
  }, [dispathc]);

  if (status !== 'received') {
    return <p>Что-то пошло не так</p>
  }

  return (
    <>
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
    </>
  );
};

export default PopularPostList;
