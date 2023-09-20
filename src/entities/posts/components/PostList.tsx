import { useLayoutEffect, useState } from 'react';
import { TbColumns1, TbColumns2, TbColumns3 } from 'react-icons/tb';

import { useAppDispatch, useAppSelector } from '../../../shared/hooks/appHooks';
import { getPostsThunk } from '../models/postsThunk';
import PostCardFromList from './PostCardFromList';
import Htag from '../../../shared/ui/HTag';
import Button from '../../../shared/ui/Button';
import Loading from '../../../shared/ui/Loading';
import Error from '../../../shared/ui/Error';

const controlСolumnButtons = [<TbColumns1 />, <TbColumns2 />, <TbColumns3 />];

const PostList = () => {
  const dispath = useAppDispatch();
  const postList = useAppSelector((state) => state.posts.posts);
  const status = useAppSelector((state) => state.posts.status);

  const [columns, setColumns] = useState(1);

  const columnsInGridInitialization = () => {
    const colInGrid = localStorage.getItem('collInGrid');

    if (colInGrid && Number.isInteger(Number.parseInt(colInGrid))) {
      setColumns(Number.parseInt(colInGrid));
    }
  };

  const changingNumberCol = (quantity: number) => {
    localStorage.setItem('collInGrid', quantity.toString());
    setColumns(quantity);
  };

  useLayoutEffect(() => {
    columnsInGridInitialization();

    dispath(getPostsThunk());
  }, [dispath]);

  if (status === 'waiting' || status === 'loading') {
    return <Loading/>
  }
  if (status === 'error') {
    return <Error/>
  }

  return (
    <section className="relative">
      {/* Блок с выборок количества колонок */}
      <div className="absolute right-0 top-[4px] flex gap-1">
        {controlСolumnButtons.map((item, index) => {
          if (index + 1 === columns) {
            return (
              <Button
                key={index}
                className="-translate-y-1 transition-transform"
                onClick={() => changingNumberCol(index + 1)}
              >
                {item}
              </Button>
            );
          }
          return (
            <Button key={index} onClick={() => changingNumberCol(index + 1)}>{item}</Button>
          );
        })}
      </div>
      
      <Htag className="mb-3" size="h2" textCenter>
        Все посты
      </Htag>
      <section className={`grid grid-cols-${columns.toString()} gap-2`}>
        {postList.map((post) => {
          return <PostCardFromList key={post._id} post={post} />;
        })}
      </section>
    </section>
  );
};

export default PostList;
