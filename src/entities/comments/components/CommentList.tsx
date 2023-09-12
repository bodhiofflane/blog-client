import { useEffect, useRef } from 'react';

import Comment from './Comment';
import Loading from '../../../shared/ui/Loading';
import Error from '../../../shared/ui/Error';

type CommentListProps = {
  commentList: {
    _id: string;
    parentPostId: string;
    authorId: string;
    authorName: string;
    commentText: string;
    createdAt: string;
    updatedAt: string;
  }[];
  commentsStatus:
    | 'waiting'
    | 'loading'
    | 'success'
    | 'error'
    | 'created'
    | 'deleted';
  authorizedUserId: string;
};

const CommentList = ({
  commentList,
  commentsStatus,
  authorizedUserId,
}: CommentListProps) => {
  const sectionWithComments = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (commentsStatus === 'success') {
      setTimeout(() => {
        if (sectionWithComments.current) {
          sectionWithComments.current.scroll({ top: 99999, behavior: 'smooth' });
        }
      }, 300);
    }
    // Если длинна массива комментарием изменится, то скрол опустится самый низ
  }, [commentList.length, commentsStatus]);

  const isCommentOwnedUser = (commentAuthorId: string) => {
    return commentAuthorId === authorizedUserId ? true : false;
  };

  // Conditional render
  // Работает неправильно. Разребусь позже

  if (commentsStatus === 'loading' || commentsStatus === 'waiting') {
    return <Loading />;
  }

  if (commentsStatus === 'error') {
    return <Error />;
  }

  return (
    <ul
      ref={sectionWithComments}
      className="min-h-fit max-h-72 overflow-y-auto"
    >
      {commentList.length ? (
        commentList.map(
          // Беру id автора здесь
          ({ _id, authorId, authorName, commentText, createdAt }) => {
            return (
              <Comment
                key={_id}
                id={_id}
                isCommentOwnedUser={isCommentOwnedUser(authorId)}
                authorId={authorId}
                authorName={authorName}
                commentText={commentText}
                createdAt={createdAt}
              />
            );
          }
        )
      ) : (
        <p>Станьте первым кто оставил комментарий</p>
      )}
    </ul>
  );
};

export default CommentList;
