import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../../shared/hooks/appHooks";
import Comment from "./Comment";
import { getCommentListByParentPostIdThunk } from "../model/commentsThunks";

type CommentListProps = {
  postId: string;
};

const CommentList = ({ postId }: CommentListProps) => {
  const comments = useAppSelector((state) => state.comments.comments);
  const status = useAppSelector((state) => state.comments.status);

  // Test. По совпадению можно будет удалить комментарий
  const authorizedUserId = useAppSelector((state) => state.auth.id);

  const dispath = useAppDispatch();

  const commentsBlock = useRef<HTMLUListElement>(null);

  useEffect(() => {
    dispath(getCommentListByParentPostIdThunk(postId));
  }, [dispath, postId]);

  useEffect(() => {
    setTimeout(() => {
      if (commentsBlock.current) {
        commentsBlock.current.scroll({ top: 9999, behavior: "smooth" });
      }
    }, 300);
    // Если длинна массива комментарием изменится, то скрол опустится самый низ
  }, [comments.length]);

  const isMyComment = (commentAuthorId: string) => {
    return commentAuthorId === authorizedUserId ? true : false;
  }

  if (status !== "success") {
    return <p>Ops...</p>;
  }

  return (
    <ul ref={commentsBlock} className="min-h-fit max-h-72 overflow-y-auto">
      {comments.length ? (
        comments.map(
          ({ _id, authorId, authorName, commentText, createdAt,  }) => {
            return (
              <Comment
                key={_id}
                id={_id}
                isMyComment={isMyComment(authorId)}
                authorId={authorId}
                authorName={authorName}
                commentText={commentText}
                createdAt={createdAt}
              />
            );
          }
        )
      ) : (
        <p>Коммиентариев нет</p>
      )}
    </ul>
  );
};

export default CommentList;
