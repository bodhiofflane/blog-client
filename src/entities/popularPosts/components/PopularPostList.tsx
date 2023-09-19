import { useEffect } from 'react';
import PopularPostCard from './PopularPostCard';
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/appHooks';
import { getPopularPostsThunk } from '../models/getPopularPostThunk';
import Htag from '../../../shared/ui/HTag';
import Loading from '../../../shared/ui/Loading';
import Error from '../../../shared/ui/Error';

const PopularPostList = () => {
  const dispathc = useAppDispatch();
  const { popularPosts, status } = useAppSelector(
    (state) => state.popularPosts
  );

  useEffect(() => {
    dispathc(getPopularPostsThunk());
  }, [dispathc]);

  if (status === 'waiting' || status === 'loading') {
    return <Loading/>
  }
  if (status === 'error') {
    return <Error/>
  }

  return (
    <section>
      <Htag className='mb-3' size='h2'>
        Полулярные посты
      </Htag>
      <div className="">
        {popularPosts.map((popularPost) => {
          return (
            <PopularPostCard
              key={popularPost._id}
              title={popularPost.title}
              _id={popularPost._id}
              views={popularPost.views}
              author={popularPost.authorName}
            />
          );
        })}
      </div>
    </section>
  );
};

export default PopularPostList;
