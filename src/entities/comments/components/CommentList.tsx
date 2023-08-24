import {useEffect, useRef, ReactNode} from 'react';
//import { useAppSelector } from '../../../shared/hooks/appHooks';

type CommentListProps = {
  children?: ReactNode;
  postId: string;
};

const CommentList = ({/* postId, */ children}: CommentListProps) => {
  //const comments = useAppSelector(state => state.comments.comments);

  const commentsBlock = useRef<HTMLUListElement>(null);

  useEffect(() => {
    setTimeout(() => {
      if (commentsBlock.current) {
        console.log(commentsBlock.current);
        commentsBlock.current.scroll({top: 9999, behavior: 'smooth'});
      }
    }, 300);
  }, []);

  return (
    <ul
      ref={commentsBlock}
      className="min-h-fit max-h-72 overflow-y-auto"
    >
      {children}
    </ul>
  );
};

export default CommentList;
