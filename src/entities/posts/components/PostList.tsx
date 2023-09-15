import { useEffect, useState } from 'react';
import {TbColumns1, TbColumns2, TbColumns3} from 'react-icons/tb'

import { useAppDispatch, useAppSelector } from '../../../shared/hooks/appHooks';
import { getPostsThunk } from '../models/postsThunk';
import PostCardFromList from './PostCardFromList';
import Htag from '../../../shared/ui/HTag';
import Button from '../../../shared/ui/Button';

const PostList = () => {
  const dispath = useAppDispatch();
  const postList = useAppSelector(state => state.posts.posts);

  const [columns, setColumns] = useState(1);

  useEffect(() => {
    dispath(getPostsThunk());
  }, [dispath]);

  return (
    <section>
      <div className='flex gap-1'>
        <Button onClick={() => setColumns(1)}>
          <TbColumns1/>
        </Button>
        <Button onClick={() => setColumns(2)}>
          <TbColumns2/>
        </Button>
        <Button onClick={() => setColumns(3)}>
          <TbColumns3/>
        </Button>
      
      </div>

      <section className={`grid grid-cols-${columns} gap-2`}>
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
    </section>
    </section>

  );
}
 
export default PostList;